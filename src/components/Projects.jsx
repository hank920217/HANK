import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Coffee, Cpu, ExternalLink, Radio } from 'lucide-react';

const projects = [
  {
    title: '臉部表情辨識與肌肉分析系統',
    period: '2023/09 – 2025/02',
    description:
      '本專題以 MediaPipe Face Mesh 作為臉部定位基礎，擷取臉部特徵點，並結合臉部肌肉動作單元 Action Unit，分析不同表情所牽動的臉部肌肉區域。系統支援攝像頭截取與本地影像上傳，能將影像送至伺服器進行表情辨識，並將辨識結果與對應肌肉位置視覺化呈現在網頁上。',
    role: '負責臉部表情模型建置、特徵資料整理、模型訓練與測試驗證。',
    technical:
      'MediaPipe Face Mesh、臉部特徵點、Action Unit、表情分類、肌肉視覺化、臉部協調性評估。',
    outcome: '獲得 113 學年度校內期末專題展第一名。',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Machine Learning', 'Action Unit'],
    link: 'https://github.com/hank920217/Facial-expressions',
    icon: <Bot size={24} />,
  },
  {
    title: 'ESP32 / WT32-ETH01 裝置端實作',
    period: '2026/02 – 至今',
    description:
      '以 ESP32 / WT32-ETH01 為核心參與裝置端實作，內容包含 GPIO 訊號讀取、Counter 狀態判斷、UART / RS232 通訊、I2C 顯示模組、Ethernet / Wi-Fi 網路連線，以及 HTTP API / MQTT 後台串接。此專案著重在裝置端資料讀取、通訊流程、狀態同步與異常處理。',
    role: '協助裝置端韌體開發、腳位規劃、通訊流程整理、異常測試與文件整理。',
    technical:
      'GPIO High / Low 訊號讀取、Counter 狀態判斷、UART / RS232 封包解析、I2C OLED 顯示、HTTP API / MQTT 串接。',
    outcome: '建立可維護的裝置端測試與整合流程，協助硬體與後台對接。',
    tags: ['ESP32', 'WT32-ETH01', 'C / C++', 'GPIO', 'UART / RS232', 'I2C', 'HTTP API', 'MQTT'],
    icon: <Cpu size={24} />,
  },
  {
    title: '球型機器人專案',
    period: '高中期間',
    description:
      '高中期間參與球型機器人研製，透過硬體結構、控制邏輯與實作測試，學習機電整合、問題排查與團隊協作。此專案讓我較早接觸硬體實作與控制概念，也成為後續理解裝置端開發與硬體通訊的基礎。',
    role: '參與機器人結構與功能測試，協助硬體組裝、問題排查與競賽展示。',
    technical: '硬體組裝、機電整合、控制邏輯、功能測試、問題排查。',
    outcome: '參與球型機器人研製並於競賽中獲得第三名。',
    tags: ['Hardware', 'Robotics', 'Testing', 'Mechatronics'],
    icon: <Radio size={24} />,
  },
  {
    title: '咖啡廳網站',
    period: '學習作品',
    description:
      '以咖啡廳品牌展示為主題製作的靜態網頁作品，包含首頁視覺、品牌介紹、餐點展示與聯絡資訊等區塊。此專案主要用於練習 HTML、CSS、JavaScript 的版面切版、視覺排版與響應式頁面設計。',
    role: '負責網站頁面結構規劃、前端版面製作、視覺排版調整與響應式設計。',
    technical: 'HTML、CSS、JavaScript、Responsive Web Design、靜態網站切版。',
    outcome: '完成可展示的咖啡廳主題靜態網站。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
    icon: <Coffee size={24} />,
  },
];

const DetailBlock = ({ label, children }) => (
  <div>
    <h4 className="text-sm font-bold text-[#1E3A5F]">{label}</h4>
    <p className="mt-1 text-sm leading-7 text-[#5B6475]">{children}</p>
  </div>
);

const Projects = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-6xl space-y-8 pb-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
          Projects
        </p>
        <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">實作專案</h1>
        <p className="mt-4 text-base leading-7 text-[#5B6475]">
          以下整理我目前完成與參與過的實作專案，包含 AI 專題、裝置端實作與網頁作品。
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="portfolio-card flex h-full flex-col rounded-2xl p-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
          >
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-[#EAF3F2] p-3 text-[#2A9D8F]">
                  {project.icon}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5B6475]">
                    專案名稱
                  </p>
                  <h2 className="mt-1 text-xl font-bold leading-8 text-[#172033]">
                    {project.title}
                  </h2>
                </div>
              </div>
              <span className="rounded-full border border-[#DDE3EA] bg-[#F5F7FA] px-3 py-1 text-xs font-semibold text-[#1E3A5F]">
                {project.period}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <DetailBlock label="簡介">{project.description}</DetailBlock>
              <DetailBlock label="我的角色">{project.role}</DetailBlock>
              <DetailBlock label="技術重點">{project.technical}</DetailBlock>
              <DetailBlock label="成果 / 產出">{project.outcome}</DetailBlock>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#DDE3EA] bg-white px-3 py-1 text-xs font-semibold text-[#1E3A5F]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#1E3A5F] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#2A9D8F]"
              >
                查看連結
                <ExternalLink size={16} />
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
