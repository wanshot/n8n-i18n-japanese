require('dotenv').config()
const fs = require('fs');
const path = require('path'); // path モジュールをインポート

// Gemini API Key and Model from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-pro'; // Default to gemini-pro if not set
const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

if (!GEMINI_API_KEY){
    console.error("環境変数 GEMINI_API_KEY を設定してください。");
    process.exit(1);
}

let targetLanguages;
const defaultTargetLanguages = [
    {
        "name": "ja", // Or "ja-JP" if you prefer
        "label": "日本語",
    }
];

if (process.env.TARGET_LANGUAGES) {
    try {
        const parsedLanguages = JSON.parse(process.env.TARGET_LANGUAGES);
        if (Array.isArray(parsedLanguages) && parsedLanguages.every(lang => lang && typeof lang.name === 'string' && typeof lang.label === 'string')) {
            targetLanguages = parsedLanguages;
            console.log("環境変数 TARGET_LANGUAGES から翻訳対象言語を読み込みました:", targetLanguages.map(l => l.label).join(', '));
        } else {
            console.warn("環境変数 TARGET_LANGUAGES の形式が正しくありません。デフォルトの翻訳対象言語（日本語）を使用します。");
            targetLanguages = defaultTargetLanguages;
        }
    } catch (e) {
        console.error("環境変数 TARGET_LANGUAGES のJSONパースに失敗しました。デフォルトの翻訳対象言語（日本語）を使用します。", e);
        targetLanguages = defaultTargetLanguages;
    }
} else {
    targetLanguages = defaultTargetLanguages;
    console.log("環境変数 TARGET_LANGUAGES が未設定です。デフォルトの翻訳対象言語（日本語）を使用します。");
}

// 翻訳結果を分割するための区切り文字（API呼び出しごとにユニークにする）
function generateUniqueSeparator() {
    return `__TRANSLATION_ITEM_SEPARATOR_${Date.now()}__${Math.random().toString(36).substring(2, 15)}__`;
}

async function doTranslate(messagesToTranslate, language) { // messagesToTranslate は文字列の配列
    if (!messagesToTranslate || messagesToTranslate.length === 0) {
        return [];
    }

    const uniqueSeparator = generateUniqueSeparator();
    // 各メッセージに番号を付け、区切り文字で結合
    const textsToTranslate = messagesToTranslate.map((msg, index) => `ITEM_START [${index + 1}] ${msg} ITEM_END`).join(`\n${uniqueSeparator}\n`);

    const defaultPromptTemplate = `あなたは高度な翻訳APIです。以下の複数の英語のテキストを、それぞれ忠実に ${language} に翻訳してください。
各英語テキストは「ITEM_START [番号]」で始まり「ITEM_END」で終わります。そして、各英語テキスト間は「${uniqueSeparator}」という特殊な文字列で区切られています。

あなたのタスクは、各英語テキストを ${language} に翻訳し、翻訳結果のみを返すことです。
翻訳結果も、必ず原文の順番通りに、「${uniqueSeparator}」という全く同じ文字列で区切って返してください。
「ITEM_START [番号]」や「ITEM_END」といったマーカーは翻訳結果に含めないでください。
挨拶、説明、前置き、後書き、その他の追加情報は一切含めず、翻訳されたテキスト群だけを「${uniqueSeparator}」で区切って出力してください。

英語テキスト群:
${textsToTranslate}

${language}への翻訳結果群 (各翻訳を「${uniqueSeparator}」で区切ってください):`;

    const userPromptTemplate = process.env.TRANSLATION_PROMPT;
    let prompt;

    if (userPromptTemplate) {
        prompt = userPromptTemplate
            .replace(/\$\{language\}/g, language)
            .replace(/\$\{uniqueSeparator\}/g, uniqueSeparator)
            .replace(/\$\{textsToTranslate\}/g, textsToTranslate);
    } else {
        prompt = defaultPromptTemplate;
    }

    const response = await fetch(GEMINI_API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "contents": [{
                "parts": [{
                    "text": prompt
                }]
            }],
            // Optional: Add generationConfig if needed
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API Error:", errorData);
        throw new Error(`Gemini API request failed with status ${response.status} for a batch of ${messagesToTranslate.length} items.`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
        let combinedTranslations = data.candidates[0].content.parts[0].text.trim();

        let translatedTexts = combinedTranslations.split(uniqueSeparator).map(t => t.trim());

        // 後処理用のパターン定義
        const patternsToRemove = [
            /^(承知しました|はい、分かりました|了解しました|かしこまりました)[、。]?\s*.*?翻訳します[：。\s]*/i,
            /^(承知しました|はい、分かりました|了解しました|かしこまりました)[、。]?\s*.*?翻訳結果です[：。\s]*/i,
            /^(承知しました|はい、分かりました|了解しました|かしこまりました)[、。]?\s*/i,
            /.*?翻訳結果は以下の通りです[：。\s]*/i,
            /.*?翻訳は以下の通りです[：。\s]*/i,
            /.*?翻訳しました[：。\s]*/i,
            /^以下に翻訳します[：。\s]*/i,
            /^翻訳結果[：。\s]*/i,
            /^(Okay|Sure|Alright|Understood|Got it),?\s*here's the translation:?\s*/i,
            /^(Okay|Sure|Alright|Understood|Got it),?\s*I will translate that for you:?\s*/i,
            /^(Okay|Sure|Alright|Understood|Got it),?\s*/i,
            /^ITEM_START\s*\[\d+\]\s*/i, // ITEM_START [番号] が残っていたら削除
            /\s*ITEM_END\s*$/i,        // ITEM_END が残っていたら削除
            /^\[\d+\]\s*/,             // [番号] のみが残っていたら削除
        ];

        const cleanText = (text) => {
            let cleanedText = text;
            for (const pattern of patternsToRemove) {
                cleanedText = cleanedText.replace(pattern, '');
            }
            cleanedText = cleanedText.replace(/^["「『]/, '').replace(/["」『]$/, ''); // 引用符削除
            return cleanedText.trim();
        };

        if (translatedTexts.length !== messagesToTranslate.length) {
            console.warn(`警告: 分割後の翻訳アイテム数(${translatedTexts.length})が原文アイテム数(${messagesToTranslate.length})と一致しません。APIレスポンス: "${combinedTranslations.substring(0, 500)}..."`); // レスポンスが長い場合があるので一部表示

            // 翻訳結果数が原文数より極端に多い場合（区切り文字が機能しなかった可能性が高い）
            if (translatedTexts.length > messagesToTranslate.length * 2 && messagesToTranslate.length > 1) {
                 console.error(`エラー: 翻訳結果の分割数が原文アイテム数に対して著しく多い(${translatedTexts.length} vs ${messagesToTranslate.length})。APIが区切り文字を正しく解釈しなかった可能性が高いです。このチャンクの翻訳は信頼性が低いため、空として扱います。`);
                 return new Array(messagesToTranslate.length).fill(''); // 全て空文字で返す
            }

            // それ以外の場合（多少のズレ）、原文の数に合わせる
            const adjustedTranslations = new Array(messagesToTranslate.length).fill('');
            for(let i=0; i < messagesToTranslate.length; i++) {
                if (translatedTexts[i] !== undefined) {
                    adjustedTranslations[i] = cleanText(translatedTexts[i]);
                }
            }
            return adjustedTranslations;
        }

        // アイテム数が一致した場合も、各要素に対してクリーニング処理
        return translatedTexts.map(text => cleanText(text));

    } else {
        console.error("バッチ翻訳に対する予期しないGemini APIレスポンス構造:", data);
        throw new Error("バッチのGemini APIレスポンスから翻訳を抽出できませんでした。");
    }
}

function putObjectValue(obj, key, value) {
    const keys = key.split('##');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!current[k]) {
            current[k] = {};
        }
        current = current[k];
    }

    current[keys[keys.length - 1]] = value;
}

const TRANSLATION_CHUNK_SIZE = 50; // 1回のAPI呼び出しで翻訳するアイテム数
const REQUEST_INTERVAL_MS = 6500; // 10 RPM (6秒/リクエスト) + バッファ0.5秒

async function translate(waitTranslateList, targetObject, targetLanguageLabel) {
    let totalTranslatedCount = 0;
    const totalItems = waitTranslateList.length;

    console.log(`翻訳開始: 合計 ${totalItems} アイテム, チャンクサイズ: ${TRANSLATION_CHUNK_SIZE}`);

    for (let i = 0; i < totalItems; i += TRANSLATION_CHUNK_SIZE) {
        const chunk = waitTranslateList.slice(i, i + TRANSLATION_CHUNK_SIZE);
        const messagesInChunk = chunk.map(item => item.message); // 原文メッセージの配列

        if (messagesInChunk.length === 0) continue;

        console.log(`チャンク ${Math.floor(i / TRANSLATION_CHUNK_SIZE) + 1} / ${Math.ceil(totalItems / TRANSLATION_CHUNK_SIZE)} を翻訳中 (${chunk.length} アイテム)...`);

        try {
            const translatedMessages = await doTranslate(messagesInChunk, targetLanguageLabel);

            if (translatedMessages.length === chunk.length) {
                chunk.forEach((originalItem, index) => {
                    const translatedText = translatedMessages[index];
                    if (translatedText && translatedText.length > 0) {
                        console.log(`翻訳成功: key "${originalItem.key}" => "${translatedText.substring(0, 50)}..."`); // 長い翻訳は一部表示
                        putObjectValue(targetObject, originalItem.key, translatedText);
                        totalTranslatedCount++;
                    } else {
                        console.log(`翻訳結果が空またはエラー: key "${originalItem.key}" はスキップされました。`);
                    }
                });
            } else {
                // このケースは doTranslate 内で調整されるはずだが、念のため
                console.error(`致命的エラー: doTranslate後のアイテム数(${translatedMessages.length})とチャンク内のアイテム数(${chunk.length})が一致しません。このチャンクはスキップされます。`);
                chunk.forEach(originalItem => {
                     console.log(`翻訳失敗 (致命的エラーのためスキップ): key "${originalItem.key}"`);
                });
            }
        } catch (e) {
            console.error(`チャンク翻訳中にエラーが発生しました: ${e.message}`);
            console.error(`エラーが発生したチャンクのキー (最初の5件):`);
            chunk.slice(0, 5).forEach(originalItem => {
                console.error(`  - ${originalItem.key}`);
            });
        }

        console.log(`処理済みアイテム: ${Math.min(i + TRANSLATION_CHUNK_SIZE, totalItems)} / ${totalItems}`);
        console.log(`現在までの成功翻訳数: ${totalTranslatedCount}`);

        if (i + TRANSLATION_CHUNK_SIZE < totalItems) {
            console.log(`${REQUEST_INTERVAL_MS / 1000}秒待機します...`);
            await new Promise(resolve => setTimeout(resolve, REQUEST_INTERVAL_MS));
        }
    }
    console.log(`翻訳完了。合計 ${totalTranslatedCount} / ${totalItems} アイテムが翻訳されました。`);
}

// 翻訳が必要なキーとメッセージを収集する
function collectMessages(oldSourceLanguages, newSourceLanguages, targetLanguages, targetObject, parentKey = '', waitTranslateList=[]){
    for (const key in newSourceLanguages) {
        let currentKey = parentKey ? parentKey + "##" + key : key;
        if (newSourceLanguages[key] instanceof Object) {
            collectMessages(oldSourceLanguages[key]  || {}, newSourceLanguages[key], targetLanguages[key] || {}, targetObject, currentKey, waitTranslateList);
        } else {
            if (targetLanguages[key] === undefined
                || oldSourceLanguages[key] === undefined
                || oldSourceLanguages[key] !== newSourceLanguages[key]) {
                // 空文字列の場合も翻訳対象として扱うが、特別な処理をする
                if (newSourceLanguages[key] === "") {
                    // 空文字列の場合は、targetLanguagesにも空文字列を設定
                    putObjectValue(targetObject, currentKey, "");
                } else {
                    waitTranslateList.push({
                        key: currentKey,
                        message: newSourceLanguages[key]
                    })
                }
            }
        }
    }
}


async function run(){
    const localEnFilePath = path.join(__dirname, "en.json"); // スクリプトと同じディレクトリの en.json
    let oldEnLanguages = {};
    if (fs.existsSync(localEnFilePath)) {
        try {
            oldEnLanguages = require(localEnFilePath); // ローカルの古い英語言語ファイル
        } catch (e) {
            console.warn(`${localEnFilePath} の読み込みに失敗しました。空のオブジェクトとして扱います。エラー:`, e);
        }
    } else {
        console.warn(`${localEnFilePath} が見つかりません。空のオブジェクトとして扱います。`);
    }

    const newEnLanguages = await fetch("https://raw.githubusercontent.com/n8n-io/n8n/refs/heads/master/packages/frontend/@n8n/i18n/src/locales/en.json") // 最新の英語言語ファイルを取得
        .then(res => res.json())
        .catch(err => {
            console.error("最新の英語言語ファイルの取得に失敗しました:", err);
            console.log("ローカルの en.json を使用して続行します。");
            return oldEnLanguages; // フォールバックとしてローカルファイルを使用 (読み込めていれば)
        });

    for (const targetLanguage of targetLanguages) {
        let targetJson = {}; // ターゲット言語のJSONオブジェクト
        // 翻訳ファイルのパスを __dirname (scriptディレクトリ) からの相対パスで解決
        let fileName = path.join(__dirname, '..', 'languages', `${targetLanguage.name}.json`);

        if (fs.existsSync(fileName)){
            try {
                targetJson = JSON.parse(fs.readFileSync(fileName, "utf8")); // 既存の翻訳ファイルを読み込み
            } catch (e) {
                console.error(`${fileName} の読み込みまたは解析に失敗しました。空のオブジェクトとして扱います。エラー:`, e);
                targetJson = {}; // エラー時は空のオブジェクト
            }
        }
        const waitTranslateList = [] // 翻訳待ちリスト
        collectMessages(oldEnLanguages, newEnLanguages , targetJson, targetJson, "", waitTranslateList); // 翻訳が必要なアイテムを収集

        if (waitTranslateList.length === 0) {
            console.log(`${targetLanguage.label} の翻訳対象アイテムはありませんでした。既存の翻訳ファイルを保持します。`);
            // 既存のファイルをそのまま保存し直すか、何もしないか。ここでは何もしない。
            // もし、キーのソートだけは行いたい場合は、以下のソート処理を有効化する。
            /*
            const sortedTargetLanguages = {};
            for (const key in newEnLanguages) {
                if (targetJson[key] !== undefined) {
                    sortedTargetLanguages[key] = targetJson[key];
                }
            }
            fs.writeFileSync(fileName, JSON.stringify(sortedTargetLanguages, null, 4));
            */
            continue; // 次の言語へ
        }

        await translate(waitTranslateList, targetJson, targetLanguage.label); // 翻訳処理を実行

        // newEnLanguages のキー順序に基づいて targetJson をソートする
        const sortedTargetLanguages = {};
        for (const key in newEnLanguages) { // 最新の英語ファイルのキー順でソート
            if (targetJson[key] !== undefined) {
                sortedTargetLanguages[key] = targetJson[key];
            } else if (oldEnLanguages[key] !== undefined && targetJson[key] === undefined) {
                // 翻訳されなかったが、元々古い翻訳があった場合はそれを引き継ぐか検討。
                // ここでは、翻訳されなかったものは含めない方針。
            }
        }
        // 翻訳後の言語ファイルを書き出す
        fs.writeFileSync(fileName, JSON.stringify(sortedTargetLanguages, null, 4));
        console.log(`${fileName} にソート済みの翻訳を書き込みました。`);
    }

    // ローカルの英語言語ファイルを最新版に更新
    fs.writeFileSync(localEnFilePath, JSON.stringify(newEnLanguages, null, 4));
    console.log(`${localEnFilePath} を最新版に更新しました。`);
}

run();
