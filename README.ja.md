# starbuttons

One or more vocal buttons for Suisei.

**[中文](https://suisei.moe/?lang=zh)** | **[English](https://suisei.moe/?lang=en)** | **[日本語](https://suisei.moe/?lang=ja)**

New feature: [Suisei remix editor](https://suisei.moe/?lang=en#/editor) (experimental)

---

README：**日本語** | [中文](https://github.com/suisei-cn/starbuttons/blob/master/README.md) | [English](https://github.com/suisei-cn/starbuttons/blob/master/README.en.md)

## 概要

### 音声

* [`public/sounds.json`](https://github.com/suisei-cn/starbuttons/blob/master/public/sounds.json) - 音声情報
* [`public/assets`](https://github.com/suisei-cn/starbuttons/tree/master/public/assets) - 音声ファイル

音声のみの投稿をする人は上記の2つを変更してください。

### 構成
* [`src/components`](https://github.com/suisei-cn/starbuttons/tree/master/src/components) - ボタンの構成
* [`src/views/MainView.vue`](https://github.com/suisei-cn/starbuttons/blob/master/src/views/MainView.vue) - ページ構造
* [`src/views/EditorView.vue`](https://github.com/suisei-cn/starbuttons/blob/master/src/views/EditorView.vue) - すいちゃんリミックスエディター (試作版)
* [`src/lang`](https://github.com/suisei-cn/starbuttons/tree/master/src/lang) - インターフェース言語ファイル
* [`src/style/style.scss`](https://github.com/suisei-cn/starbuttons/blob/master/src/style/style.scss) - ボタンの共用スタイル

## ローカルでの利用方法
``` sh
# yarnのインストールが必要です。
yarn install
yarn serve #ホットリロード付の開発モデル
```
