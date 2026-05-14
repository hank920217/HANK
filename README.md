# Howard Portfolio Website

個人技術作品集網站，使用 React、Vite 與 Tailwind CSS 建置，部署於 GitHub Pages。

正式網站：

```text
https://hank920217.github.io/HANK/
```

## Website Positioning

本網站用來呈現 Howard 的整體技術經驗、專案成果與履歷資訊，不限定為單一職務方向。

主要呈現內容包含：

- 資訊管理背景
- 軟體與網頁實作
- AI 影像辨識專題
- 裝置端與系統整合經驗
- 實習、工作經驗、學歷與證照
- PNG 履歷瀏覽與 PDF 履歷連結

## Pages

網站使用 React state-based page switching，主要頁面如下：

```text
landing     首頁 Hero 與快速入口
projects    實作專案
experience  技術經歷、學歷與證照
resume      履歷圖片與 PDF
contact     聯絡方式
```

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages

## Project Structure

```text
src/
  App.jsx
  components/
    Hero.jsx
    Navigation.jsx
    Projects.jsx
    Experience.jsx
    Resume.jsx
    Contact.jsx

public/
  certs/
    resume.png
    resume.pdf
    profile.jpg
    certificate images
```

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Default local URL:

```text
http://localhost:5173/HANK/
```

## Common Commands

```bash
npm run lint
npm run build
npm run preview
```

## Deployment

This project is deployed to GitHub Pages through the `gh-pages` branch.

Run:

```bash
npm run deploy
```

Deployment flow:

```text
1. npm run build
2. Generate production files in dist/
3. Publish dist/ to gh-pages branch
4. GitHub Pages serves the gh-pages branch
```

After deployment, confirm the official site has loaded the latest asset files:

```text
https://hank920217.github.io/HANK/
```

## Git Notes

Pushing to `main` updates the source code only. The website itself updates after `npm run deploy` publishes the latest `dist/` output to `gh-pages`.

Recommended update flow:

```bash
git add .
git commit -m "update portfolio"
git push origin main
npm run deploy
```
