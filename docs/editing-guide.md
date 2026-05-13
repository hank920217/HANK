# Portfolio 編輯指南

這份文件整理各頁面與模組要去哪個檔案修改。網站是 React state-based view switching，主要頁面由 `src/App.jsx` 控制，不是多個 HTML 頁。

## 主要頁面對照

| 頁面 | view id | 主要檔案 | 用途 |
| --- | --- | --- | --- |
| 首頁 | `landing` | `src/components/Hero.jsx` | 個人定位、照片、首頁 CTA、首頁亮點 |
| 實作專案 | `projects` | `src/components/Projects.jsx` | 專案卡片與專案連結 |
| 技術經歷 | `experience` | `src/components/Experience.jsx` | 技能、工作經驗、學歷、證照圖片 |
| 履歷 | `resume` | `src/components/Resume.jsx` | 履歷 PNG 顯示與 PDF 下載 |
| 聯絡我 | `contact` | `src/components/Contact.jsx` | Email、GitHub、LinkedIn、Phone 與聯絡說明 |
| 導覽列 | 全站共用 | `src/components/Navigation.jsx` | 上方切換按鈕 |

## 1. 新增或調整頁面切換

檔案：`src/App.jsx`

主要看這幾段：

```jsx
const [view, setView] = useState('landing');
```

以及：

```jsx
{view === 'landing' && <Hero ... />}
{view === 'projects' && <Projects ... />}
{view === 'experience' && <Experience ... />}
{view === 'resume' && <Resume ... />}
{view === 'contact' && <Contact ... />}
```

如果要新增頁面：

1. 在 `src/components/` 新增元件檔案。
2. 在 `App.jsx` import 新元件。
3. 新增一個 `{view === 'xxx' && <NewPage />}`。
4. 到 `Navigation.jsx` 新增對應的 nav item。

## 2. 導覽列

檔案：`src/components/Navigation.jsx`

修改這個陣列：

```jsx
const navItems = [
  { id: 'landing', label: '首頁', icon: <Home size={17} /> },
  { id: 'projects', label: '實作專案', icon: <FolderGit2 size={17} /> },
  { id: 'experience', label: '技術經歷', icon: <BriefcaseBusiness size={17} /> },
  { id: 'resume', label: '履歷', icon: <FileText size={17} /> },
  { id: 'contact', label: '聯絡我', icon: <Mail size={17} /> },
];
```

編輯方式：

- `id` 必須對應 `App.jsx` 裡面的 view id。
- `label` 是畫面上看到的文字。
- `icon` 使用 `lucide-react` 的 icon。
- 如果新增 icon，記得在檔案最上方 import。

## 3. 首頁 Hero

檔案：`src/components/Hero.jsx`

### 技能標籤

修改：

```jsx
const skillTags = [
  'Python',
  'C / C++',
  'MediaPipe',
  ...
];
```

### 底部亮點 strip

修改：

```jsx
const compactHighlights = [
  '臉部表情模型建置',
  '裝置端通訊整合',
  '高雄榮總資訊部實習',
];
```

### 首頁大標題與介紹文字

在 JSX 內搜尋：

```jsx
曾俊翰 Howard
```

附近可以修改：

- 姓名
- 定位文字
- 兩段 intro
- CTA button 文字

### 個人照片

目前使用：

```jsx
src={assetPath('certs/profile.jpg')}
```

照片檔案位置：

```text
public/certs/profile.jpg
```

如果要換照片：

1. 把新照片放到 `public/certs/`。
2. 修改 `assetPath('certs/檔名')`。
3. 如果想完整顯示圖片，用 `object-contain`。
4. 如果想裁切填滿，用 `object-cover`。

目前照片尺寸在這裡調：

```jsx
className="h-60 w-full object-contain object-center sm:h-72"
```

## 4. 實作專案頁

檔案：`src/components/Projects.jsx`

主要修改：

```jsx
const projects = [
  {
    title: '專案名稱',
    period: '時間',
    description: '簡介',
    role: '我的角色',
    technical: '技術重點',
    outcome: '成果 / 產出',
    tags: ['HTML', 'CSS'],
    link: 'https://...',
    icon: <Coffee size={24} />,
  },
];
```

每個專案欄位用途：

- `title`：專案名稱
- `period`：期間或時間
- `description`：專案簡介
- `role`：你負責的內容
- `technical`：技術重點
- `outcome`：成果或產出
- `tags`：卡片底部技術標籤
- `link`：外部連結，可省略
- `icon`：專案圖示

新增專案：

1. 複製一整個 `{ ... }` 專案物件。
2. 貼到 `projects` 陣列內。
3. 修改文字與 tags。
4. 若要外部連結就加 `link`，沒有連結就不要放 `link`。

## 5. 技術經歷頁

檔案：`src/components/Experience.jsx`

### 技能分類

修改：

```jsx
const skillGroups = [
  {
    title: '程式開發',
    icon: <Code2 size={20} />,
    items: ['Python', 'C / C++', 'C#', 'JavaScript'],
  },
];
```

### 工作 / 實習經驗

修改：

```jsx
const workItems = [
  {
    title: '公司｜職稱',
    period: '期間',
    description: '工作描述',
    points: ['工作內容 1', '工作內容 2'],
  },
];
```

`points` 可以省略；省略後就只會顯示描述段落。

### 學歷

修改：

```jsx
const education = [
  {
    school: '學校',
    detail: '科系',
    period: '期間',
  },
];
```

### 證照圖片

主要證照：

```jsx
const mainCertifications = [
  { name: '證照名稱', image: 'certs/AI-900.jpg' },
];
```

其他證照：

```jsx
const otherCertifications = [
  { name: '證照名稱', image: 'certs/TQCFOM.jpg' },
];
```

證照圖片放在：

```text
public/certs/
```

注意：

- `name` 是 hover 顯示的證照名稱。
- `image` 是圖片路徑，開頭要用 `certs/`。
- 圖片會透過 `import.meta.env.BASE_URL` 處理 GitHub Pages 路徑。
- 如果圖片名稱改了，這裡也要同步改。

## 6. 聯絡我頁

檔案：`src/components/Contact.jsx`

### 聯絡方式

修改：

```jsx
const contactLinks = [
  {
    label: 'Email',
    value: 'stone0982312946@gmail.com',
    href: 'mailto:stone0982312946@gmail.com',
    icon: <Mail size={22} />,
    note: '說明文字',
  },
];
```

欄位用途：

- `label`：聯絡方式名稱
- `value`：畫面顯示文字
- `href`：實際點擊連結
- `icon`：圖示
- `note`：補充說明，避免畫面太空

### 適合聯絡方向

修改：

```jsx
const focusItems = [
  '軟體、AI 與裝置端整合相關職缺',
  ...
];
```

## 7. 履歷頁

檔案：`src/components/Resume.jsx`

目前使用：

```jsx
const resumeImage = assetPath('certs/resume.png');
const resumePdf = assetPath('certs/resume.pdf');
```

履歷檔案位置：

```text
public/certs/resume.png
public/certs/resume.pdf
```

更新履歷：

1. 用新檔案覆蓋 `public/certs/resume.png`。
2. 用新 PDF 覆蓋 `public/certs/resume.pdf`。
3. 檔名不變就不用改程式。

## 8. 色彩與共用樣式

檔案：`src/index.css`

共用卡片樣式：

```css
.portfolio-card
.portfolio-soft
```

目前主要色票：

```text
背景：#F5F7FA
主文字：#172033
次文字：#5B6475
主色：#1E3A5F
強調色：#2A9D8F
邊框：#DDE3EA
柔和區塊：#EAF3F2
```

如果只是改內容，通常不需要動 `index.css`。

## 9. 圖片與檔案放置規則

所有公開靜態檔案放在：

```text
public/
```

目前證照與履歷放在：

```text
public/certs/
```

React 裡引用 public 檔案時，使用：

```jsx
const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
```

範例：

```jsx
src={assetPath('certs/profile.jpg')}
```

不要直接寫：

```jsx
src="/certs/profile.jpg"
```

因為 GitHub Pages 專案路徑是 `/HANK/`，直接寫 `/certs/...` 可能會壞掉。

## 10. 修改後測試與部署

每次修改後建議照這個順序：

```bash
npm run lint
npm run build
npm run deploy
```

確認正式站：

```text
https://hank920217.github.io/HANK/
```

如果要提交到 GitHub：

```bash
git status
git add 修改的檔案
git commit -m "你的 commit 訊息"
git push origin main
```

## 11. 常見修改範例

### 新增一張證照

1. 把圖片放到 `public/certs/new-cert.jpg`。
2. 到 `src/components/Experience.jsx`。
3. 在 `mainCertifications` 或 `otherCertifications` 加：

```jsx
{ name: '新證照名稱', image: 'certs/new-cert.jpg' },
```

### 新增專案連結

到 `src/components/Projects.jsx` 的指定專案加：

```jsx
link: 'https://example.com',
```

### 改首頁照片大小

到 `src/components/Hero.jsx` 找：

```jsx
className="h-60 w-full object-contain object-center sm:h-72"
```

調整：

- `h-60`：手機或小螢幕高度
- `sm:h-72`：較大螢幕高度
- `max-w-sm` / `max-w-md`：照片卡寬度

