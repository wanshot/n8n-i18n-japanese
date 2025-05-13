# n8n 日本語化手順

## 環境変数の設定
> 他の言語についてはこちらを参照してください: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

n8n のデフォルト言語を日本語に設定します。
```
N8N_DEFAULT_LOCALE=ja
```

## editor-ui パッケージの配置 (手動更新の場合)
n8n のリリースに対応するバージョンの日本語化された `editor-ui` ファイル群を配置します。
通常、このリポジトリの翻訳スクリプトを実行することで、`./editor-ui-dist` ディレクトリに生成されます。

Docker を使用する場合、この `editor-ui-dist` ディレクトリをコンテナ内の以下のパスにマウントします。
```
/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist
```

## Docker コマンドでの実行例
```shell
# 【】内はご自身の環境に合わせて変更してください
docker run -it --rm --name n8n-japanese-test \
-p 15678:5678 \
-v 【ローカルの editor-ui-dist ディレクトリのパス】:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
-e N8N_DEFAULT_LOCALE=ja \
-e N8N_SECURE_COOKIE=false \
n8nio/n8n:【n8nのバージョン】
```

## docker-compose を使用する場合
リポジトリをクローンし、適切なバージョンのタグにチェックアウトしてから実行してください。
```shell
# リポジトリをクローン
git clone 【このリポジトリのURLまたはフォークしたご自身のリポジトリURL】
cd n8n-i18n-chinese
# 例: n8n バージョン 1.86.1 に対応する場合 (適宜変更してください)
# git checkout n8n@1.86.1
# 実行
docker-compose up
```
**注意:** `docker-compose.yml` 内の `image: n8nio/n8n:{version}` の `{version}` は、利用したい n8n のバージョンに置き換えてください。

# 翻訳の仕組み
n8n の `editor-ui` は国際化 (i18n) をサポートしていますが、公式には一部の言語パックのみが提供されています。
このリポジトリでは、以下の手順で日本語化を実現しています。

1.  英語の言語ファイル (`en.json`) を取得します。
2.  翻訳スクリプト ([`script/translate.js`](n8n-i18n-chinese/script/translate.js)) を使用して、英語のテキストを Gemini API を介して日本語に翻訳します。
3.  翻訳結果を [`languages/ja.json`](n8n-i18n-chinese/languages/ja.json) として保存します。
4.  この `ja.json` を含む `editor-ui` をビルド (または必要なファイルを配置) します。
5.  n8n の環境変数 `N8N_DEFAULT_LOCALE` を `ja` に設定することで、UI が日本語で表示されます。

# 他の言語パックの追加
他の言語の翻訳ファイルを追加する場合は、[`languages/`](n8n-i18n-chinese/languages/) ディレクトリに `{言語コード}.json` の形式でファイルを作成し、プルリクエストを送ってください。
翻訳スクリプトも適宜修正することで、新しい言語への自動翻訳に対応できる可能性があります。
