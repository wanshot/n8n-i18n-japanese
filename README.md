# n8n 日本語化プロジェクト

このプロジェクトは、n8n のユーザーインターフェース (UI) を日本語で利用可能にすることを目的としています。
翻訳済みの `editor-ui` パッケージと、それを利用するための Docker 環境を提供します。

## 主な機能

*   **日本語翻訳ファイルの提供**: n8n の UI テキストに対応する日本語の翻訳ファイル ([`languages/ja.json`](languages/ja.json:0)) を提供します。
*   **翻訳済み `editor-ui` の配布**: 最新の n8n リリースに対応した、日本語化済みの `editor-ui` ビルド成果物を GitHub Releases で公開しています。
*   **Docker イメージでの簡易利用**: `docker-compose` を使用して、日本語化された n8n 環境を簡単に起動できます。

## 利用方法

### Docker を利用する場合 (推奨)

最も簡単な方法は、提供されている `docker-compose.yml` を利用することです。
これにより、適切なバージョンの n8n と日本語化された `editor-ui` が自動的にセットアップされます。

**手順:**

1.  **リポジトリをクローン**:
    ```shell
    git clone https://github.com/USERNAME/n8n-i18n-japanese.git # あなたのリポジトリURLに置き換えてください
    cd n8n-i18n-japanese
    ```
2.  **(オプション) 特定の n8n バージョンを利用する場合**:
    GitHub Actions によって、n8n のリリースに対応するタグがこのリポジトリに作成されます。
    特定のバージョンを利用したい場合は、そのタグにチェックアウトしてください。
    ```shell
    # 例: n8n バージョン 1.86.1 に対応する場合 (利用可能なタグを確認してください)
    # git checkout n8n@1.86.1
    ```
    `docker-compose.yml` 内の `image: n8nio/n8n:{version}` の `{version}` は、GitHub Actions によって自動的に最新の n8n バージョンに更新されます。手動で特定のバージョンを指定したい場合は、このファイルを編集してください。
3.  **Docker Compose を起動**:
    ```shell
    docker-compose up
    ```
    これにより、`editor-ui-dist` ディレクトリ (GitHub Actions によってビルドされた日本語化済み `editor-ui` が含まれる) がコンテナ内の適切な場所にマウントされ、n8n が日本語 UI で起動します。

**`docker run` コマンドを利用する場合:**

GitHub Releases から、利用したい n8n のバージョンに対応する `editor-ui.tar.gz` をダウンロードし、展開して `editor-ui-dist` ディレクトリを取得します。
その後、以下のコマンド例のように `editor-ui-dist` ディレクトリをマウントします。

```shell
# 【】内はご自身の環境に合わせて変更してください
docker run -it --rm --name n8n-japanese-test \
-p 15678:5678 \
-v 【ローカルの editor-ui-dist ディレクトリのパス】:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
-e N8N_DEFAULT_LOCALE=ja \
-e N8N_SECURE_COOKIE=false \
n8nio/n8n:【n8nのバージョン】
```

### 手動で翻訳とビルドを行う場合

最新の翻訳を自分で生成したり、開発目的で利用したりする場合は、以下の手順で手動実行できます。

1.  **環境変数の設定**:
    *   n8n のデフォルト言語を日本語に設定します。プロジェクトルートに `.env` ファイルを作成し、以下を記述するか、環境変数として設定してください。
        ```
        N8N_DEFAULT_LOCALE=ja
        ```
    *   翻訳スクリプトは Gemini API を利用します。`.env` ファイルに Gemini API キーを設定してください。
        ```
        GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
        # オプションでモデルも指定可能 (デフォルト: gemini-pro)
        # GEMINI_MODEL="gemini-1.5-flash"
        ```
2.  **依存関係のインストール**:
    ```shell
    npm install
    ```
3.  **翻訳スクリプトの実行**:
    以下のコマンドで、最新の英語ロケールファイルを取得し、日本語に翻訳して [`languages/ja.json`](languages/ja.json:0) を更新します。
    ```shell
    npm run i18n:translate
    ```
    このスクリプトは、[`script/en.json`](script/en.json:0) (前回取得した英語ロケール) と比較し、差分のみを翻訳します。
4.  **ビルド済み `editor-ui` の配置**:
    上記スクリプトは翻訳ファイルを作成するのみです。n8n 本体に日本語 UI を適用するには、n8n のソースコードを取得し、`languages/ja.json` を配置した上で `editor-ui` パッケージをビルドし、生成された `dist` ディレクトリを n8n のインストール先に配置する必要があります。
    このリポジトリの GitHub Actions では、このビルドプロセスを自動化し、`editor-ui-dist` ディレクトリを生成しています。

## 翻訳の仕組み

1.  **英語ロケールファイルの取得**: n8n の公式リポジトリから最新の英語ロケールファイル (`en.json`) を取得します。
2.  **差分翻訳**: ローカルに保存されている前回の英語ロケールファイル ([`script/en.json`](script/en.json:0)) と比較し、新規追加または変更されたテキストのみを抽出します。
3.  **自動翻訳**: 抽出されたテキストを、[`script/translate.js`](script/translate.js:0) スクリプトが Gemini API を利用して日本語に翻訳します。
4.  **翻訳ファイルの保存**: 翻訳結果を既存の日本語翻訳ファイル ([`languages/ja.json`](languages/ja.json:0)) にマージ・更新します。
5.  **UI への適用**: 更新された `ja.json` を含む `editor-ui` パッケージをビルドし、n8n 環境に配置します。環境変数 `N8N_DEFAULT_LOCALE=ja` を設定することで、n8n の UI が日本語で表示されます。

## GitHub Actions による自動化

このリポジトリでは、GitHub Actions ([`.github/workflows/node.js.yml`](.github/workflows/node.js.yml:0)) を利用して、以下の処理を自動化しています。

*   **定期的な n8n リリースチェック**: 毎日定時に n8n の GitHub リポジトリを監視し、新しいリリースがないか確認します。
*   **自動ビルドとパッケージ化**:
    *   新しい n8n のリリースが検出されると、そのバージョンの n8n ソースコードをチェックアウトします。
    *   [`languages/ja.json`](languages/ja.json:0) を n8n のソースツリー内の適切な位置にコピーします。
    *   n8n のバージョンに応じて、適切なパッチファイル ([`fix_editor-ui.patch`](fix_editor-ui.patch:0) または [`fix_editor-ui.old.patch`](fix_editor-ui.old.patch:0)) を適用します。これらのパッチは、翻訳表示に関する軽微な不具合を修正します。
    *   日本語化された `editor-ui` パッケージをビルドします。
    *   ビルドされた `dist` ディレクトリを `editor-ui-dist` としてリポジトリにコミットし、さらに `editor-ui.tar.gz` としてアーカイブします。
    *   `docker-compose.yml` 内の n8n バージョンを更新します。
*   **GitHub Release の作成**:
    *   ビルドされた `editor-ui.tar.gz` を添付ファイルとして、新しい GitHub Release を作成します。
    *   リリースには、対応する n8n のバージョンを示すタグ (例: `n8n@1.86.1`) が付けられます。このタグはリポジトリにもプッシュされます。

この自動化により、ユーザーは常に最新の n8n バージョンに対応した日本語化パッケージを容易に入手できます。

## コントリビューション

翻訳の改善や、他の言語パックの追加、機能改善に関するプルリクエストを歓迎します。

*   **他の言語パックの追加**:
    1.  [`languages/`](languages/) ディレクトリに `{言語コード}.json` (例: `ko.json`) の形式でファイルを作成します。
    2.  [`script/translate.js`](script/translate.js:0) の `targetLanguages` 配列に新しい言語の情報を追加します。
    3.  プルリクエストを送信してください。可能であれば、翻訳スクリプトが新しい言語に対応できるように修正を加えてください。
*   **不具合報告・改善提案**: Issues にてご報告ください。
