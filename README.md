# Hank Portfolio Website

一個使用 **React + Vite + Tailwind CSS + Framer Motion** 建立的個人作品集網站，重點在於：

- 以玻璃擬態與暖色系風格呈現視覺設計
- 以流暢的頁面轉場與元件動畫提升互動感
- 集中展示個人學經歷、證照與專案成果

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Framer Motion
- Lucide React

## 功能特色

- 首頁 Hero 區塊（個人資訊與導覽入口）
- 經歷頁（學歷時間軸、證照牆、工作經歷）
- 作品頁（專案卡片與獎狀彈窗預覽）
- 共享動態導覽列與頁面切換動畫
- 圖片載入失敗時的 fallback 顯示

## 專案結構

```text
src/
  App.jsx                  # 主頁面切換與整體布局
  components/
    Hero.jsx               # 首頁 Hero 區塊
    Experience.jsx         # 經歷與證照展示
    Projects.jsx           # 專案列表與 modal
    Navigation.jsx         # 導覽列
public/
  certs/                   # 個人證照與獎狀圖片資源
```

## 網站連結

- 線上作品集：https://hank920217.github.io/HANK/

## 快速開始

```bash
npm install
npm run dev
```

開發伺服器啟動後，預設可在本機開啟：

- http://localhost:5173

## 可用指令

```bash
npm run dev      # 啟動開發模式
npm run build    # 產生正式版輸出到 dist/
npm run preview  # 本機預覽 build 結果
npm run lint     # 執行 ESLint 檢查
```

## 部署

此專案已在 `package.json` 提供 GitHub Pages 的部署腳本：

```bash
npm run predeploy
npm run deploy
```

> `deploy` 會將 `dist/` 內容發佈到 GitHub Pages（透過 `gh-pages`）。
