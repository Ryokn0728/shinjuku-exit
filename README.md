# SHINJUKU EXIT - 新宿駅構内ナビゲーション

新宿駅の複雑な構内で、改札から出口まで迷わずたどり着けるナビゲーションWebアプリです。

## 機能

- 🚉 全ての新宿駅改札からスタート地点を選択
- 🚪 全ての出口を目的地として選択可能
- 🗺️ 視覚的にわかりやすい構内マップ
- 📱 スマートフォン対応のレスポンシブデザイン
- 📍 出口の詳細情報と周辺施設の案内

## セットアップ

### 必要な環境

- Node.js 16以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/shinjuku-exit.git
cd shinjuku-exit

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:5173` にアクセスしてください。

## 使い方

1. **改札を選択**: 現在いる改札を選択します
2. **出口を選択**: 目的の出口を選択します
3. **ルート表示**: 選択した改札から出口までのルートが地図上に表示されます
4. **出口情報**: 出口の詳細情報や周辺施設を確認できます

## 技術スタック

- **React** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - スタイリング
- **React Router** - ルーティング
- **Vite** - ビルドツール

## デプロイ

このプロジェクトはVercelでの自動デプロイに対応しています。

1. GitHubリポジトリをVercelに接続
2. mainブランチへのプッシュで自動的にデプロイ

## プロジェクト構造

```
src/
├── components/
│   └── StationMap.tsx    # 駅構内マップコンポーネント
├── data/
│   └── stationData.ts    # 改札・出口・ルートデータ
├── pages/
│   ├── Home.tsx          # ホーム画面
│   ├── Route.tsx         # ルート表示画面
│   └── ExitDetail.tsx    # 出口詳細画面
└── App.tsx               # メインアプリケーション
```

## ライセンス

MIT License