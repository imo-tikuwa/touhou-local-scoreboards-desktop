# CHANGELOG

```txt
Summary
  1. document grouping follow 'SemVer2.0' protocol
  2. use 'PATCH' as a minimum granularity
  3. use concise descriptions
  4. type: feat \ fix \ update \ perf \ remove \ docs \ chore
  5. version timestamp follow the yyyy.MM.dd format
```

## 0.5.0 [2024.12.03]

- fix: 他作品のリプレイがアップロードできてしまう問題を修正。以下一例
  - 例1：東方星蓮船の画面に妖精大戦争、東方天空璋のリプレイをアップロードできてしまう
  - 例2：東方神霊廟の画面に東方輝針城、東方紺珠伝、東方天空璋、東方鬼形獣等のリプレイをアップロードできてしまう
- feat: 更新履歴について画面内で確認できるよう対応

## 0.4.2 [2024.11.24]

- feat: Electron 版初公開

## 0.4.0 [2024.11.23]

- `※機能的な変更はないのでChrome版のリリースはしない`
- feat: Electron 化に向けたソースの置き場所のサブモジュール化
- feat: ロケールについてユーザーに公開するにあたってのサブモジュール化

## 0.3.0 [2024.11.16]

- feat: 妖精大戦争、東方鬼形獣、東方虹龍洞に対応
- feat: リプレイ情報のバックアップ、リストア機能を作成

## 0.2.0 [2024.11.10]

- feat: リプレイ1件を比較元として選択し同一難易度の他のリプレイとの比較を行う機能を作成
- feat: 多言語対応（日本語 / 英語）

## 0.1.0 [2024.11.02]

- feat: 初期開発が完了した状態（th6/7/8/10/11/12/13/14/15/16 に対応）

## 0.0.0 [2024.10.21]

- feat: initial
- feat: generator by ![create-chrome-ext](https://github.com/guocaoyi/create-chrome-ext)
