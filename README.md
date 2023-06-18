# CloudSeed-Frontend
![image](https://github.com/Melonps/CloudSeed-Frontend/assets/95263124/7a7e9b85-cb27-4933-acc2-e4a787cce1ed)

★を付けてあげてください！

## CloudSeed-Frontendの使い方
本プロジェクトはローカルでの実行を想定しております。Zappaやawsがどーのこーの描いてありますが、デプロイは成功していないのでご注意ください。

下に実行手順を示します。あ、様々な.envファイルが必要です。今回必要になったのは下のようになりました。プロジェクト直下に作ってください。必要なものは、Firebaseのキーですね。調べたら出てきます。

```shell
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_IREBASE_PROJECTID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_API_MESSAGE_SENDER_ID=""
VITE_FIREBASE_APP_ID=""

```
プロジェクトを立ち上げるディレクトリに移動してください。必ず、[CloudSeed-Backend](https://github.com/sgmtg/CloudSeed-Backend.git)、とは別のプロジェクトディレクトリで、実行してください。

また、以下はローカルにNodeがインストールされている状況を想定しています。npm派です。

```shell
git clone https://github.com/Melonps/CloudSeed-Frontend.git
```

で、レポジトリをダウンロードしてもらって、フロントエンドのAPI_KEYを入力してください。詳細は向こうのレポジトリで。

```shell
cd CloudSeed-Frontend
```

で、ディレクトリ移動

```shell
npm install
```

で、モジュールをインストールしてください。

```shell
npm start
```

# Backendの立ち上げ
また、以下はローカルにPython3がインストールされている状況を想定しています。Docker派ですが、venvを使います。

[CloudSeed-Backend](https://github.com/sgmtg/CloudSeed-Backend.git)にアクセスし、本プロジェクトは別のプロジェクトディレクトリで、

```shell
git clone https://github.com/sgmtg/CloudSeed-Backend.git
```

で、レポジトリをダウンロードしてもらって、バックエンドのAPI_KEYを入力してください。詳細は向こうのレポジトリで。

```shell
cd CloudSeed-Backend
```

で、ディレクトリ移動

## 環境構築
新しい環境の作成
```shell
python -m venv development
```

Activate
```shell
.\development\Scripts\activate
```

パッケージのインストール
```shell
pip install -r requirements.txt
```

## AWS configureの確認
```shell
aws configure
```

## flaskのテスト
```shell
flask --debug run
```

もしくは、

```shell
python /flasktest.py
```

で動かしてください。

