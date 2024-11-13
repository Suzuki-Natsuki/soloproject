## My Pet アプリ概要
![demo](https://github.com/user-attachments/assets/be0e8fa8-6243-4ee3-959f-3e4dd2bcdb7c)

## アプリ説明
ペットの散歩の時間・ご飯の時間を管理できるアプリ

#### 散歩に行った時間を記録
<img width="283" alt="スクリーンショット 2024-11-13 13 17 51" src="https://github.com/user-attachments/assets/3ebdc49d-8067-4e58-8ecc-6d7c8f17c969">

#### ご飯を食べた時間を記録
<img width="280" alt="スクリーンショット 2024-11-13 13 18 05" src="https://github.com/user-attachments/assets/d8b58cb9-1a33-460b-9dac-227758a4a57f">

#### 過去の散歩・ご飯の履歴を表示
<img width="42" alt="スクリーンショット 2024-11-13 13 18 13" src="https://github.com/user-attachments/assets/77655ed8-b390-4590-9086-38a088a8ade3">
<img width="312" alt="スクリーンショット 2024-11-13 13 18 24" src="https://github.com/user-attachments/assets/adb57926-5308-47a0-bbaf-f66a4c996c7d">

#### 新しいペットを追加
<img width="127" alt="スクリーンショット 2024-11-13 13 18 42" src="https://github.com/user-attachments/assets/0b8483f2-1164-43af-81b9-332fdb692ac1">
<img width="389" alt="スクリーンショット 2024-11-13 13 19 28" src="https://github.com/user-attachments/assets/e704a187-fc65-40e5-875a-2b5650cfa418">

  
## 使用技術
<p>
  <img src="https://img.shields.io/badge/Node.js-F5F5F5.svg?logo=node.js&style=flat">
  <img src="https://img.shields.io/badge/Javascript-276DC3.svg?logo=javascript&style=flat">
  <img src="https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&style=flat">
  <img src="https://img.shields.io/badge/-HTML5-333.svg?logo=html5&style=flat">
  <img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat">
  <img src="https://img.shields.io/badge/-Express-555.svg?logo=express&style=flat">
  <img src="https://img.shields.io/badge/-PostgreSQL-336791.svg?logo=postgresql&style=flat">
  <img src="https://img.shields.io/badge/-intellij%20IDEA-000.svg?logo=intellij-idea&style=flat">
<p>

## 開発環境構築

#### Node.lsのインストール
<https://nodejs.org/en/>

#### gitリポジトリのクローン
```
git clone git@github.com:Suzuki-Natsuki/soloproject.git
```

### バックエンド

#### 1. パッケージのインストール
```
npm install
```

#### 2. データベース作成
```
psql
CREATE DATABASE pets;
\q
```

#### 4. マイギュレージョン・シードの作成
```
npm run db:migrate
npm run db:seed
```

#### 5. 起動
```
npm run dev
```

### フロントエンド

#### 1. パッケージのインストール
```
npm install
```

#### 2. 起動
```
npm run dev
```

#### 3. ローカルホストへアクセス
<http://localhost:5173/>

## 今後の計画
・病院、ワクチン接種、シャンプーなどを管理できるカレンダー追加  
・近くの動物病院を表示  
・散歩時間の天気予報を表示  
