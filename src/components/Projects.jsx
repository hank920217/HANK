import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Globe2 } from 'lucide-react';

const projects = [
  {
    title: '臉部表情辨識與肌肉分析系統',
    result: '113 學年度校內期末專題展第一名',
    desc: '以 Python、MediaPipe 與機器學習流程建立臉部表情模型，整理影像資料、臉部特徵點與肌肉視覺化分析，用於呈現表情辨識結果。',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Machine Learning'],
    icon: <Bot size={24} />,
  },
  {
    title: 'ESP32 / WT32-ETH01 裝置端實作',
    result: '裝置端通訊與後台串接實作',
    desc: '參與 ESP32 / WT32-ETH01 韌體開發，處理 GPIO 訊號讀取、UART / RS232、I2C、HTTP API 與 MQTT 等裝置端通訊流程。',
    tags: ['ESP32', 'WT32-ETH01', 'GPIO', 'UART / RS232', 'I2C', 'API'],
    icon: <Cpu size={24} />,
  },
  {
    title: '個人履歷網站',
    result: 'GitHub Pages 部署作品集',
    desc: '使用 React、Tailwind CSS 與 Framer Motion 建立個人技術作品集，整合專案、經歷、履歷圖片與 PDF 連結。',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages'],
    icon: <Globe2 size={24} />,
  },
];

const Projects = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-6xl pb-20 pt-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
          Projects
        </p>
        <h2 className="text-4xl font-bold text-amber-950">實作專案</h2>
        <p className="mt-4 text-base leading-7 text-amber-950/70">
          依照成果、AI 實作、裝置端與網站建置整理，呈現從資料處理到裝置串接的完整技術經驗。
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-amber-900/10 bg-amber-950/90 p-6 text-amber-50 shadow-2xl shadow-amber-900/10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="rounded-xl bg-amber-400/15 p-3 text-amber-300">
                {project.icon}
              </div>
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
                {project.result}
              </span>
            </div>

            <h3 className="text-xl font-bold leading-8 text-amber-50">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-amber-100/75">{project.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-amber-300/15 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
