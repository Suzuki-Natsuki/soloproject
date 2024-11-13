## My Pet アプリ概要
![demo](https://github.com/user-attachments/assets/be0e8fa8-6243-4ee3-959f-3e4dd2bcdb7c)

## アプリ説明
ペットの散歩の時間・ご飯の時間を管理できるアプリ

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




