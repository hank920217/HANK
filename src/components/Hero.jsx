import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Cpu, FileText, FolderGit2, Trophy, User } from 'lucide-react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const skillTags = ['Python', 'C / C++', 'JavaScript', 'React', 'ESP32', 'AI / MediaPipe'];
const compactHighlights = ['臉部表情模型建置', '裝置端通訊整合', '高雄榮總資訊部實習'];

const Hero = ({ setView }) => {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-6xl flex-col gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
      transition={{ duration: 0.5 }}
    >
      <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-900/15 bg-white/45 px-4 py-2 text-sm font-semibold text-amber-900 shadow-sm backdrop-blur">
            <BriefcaseBusiness size={16} />
            Personal Technical Portfolio
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-amber-950 sm:text-5xl lg:text-6xl">
              曾俊翰 Howard
            </h1>
            <p className="text-xl font-semibold text-amber-800 sm:text-2xl">
              資訊管理背景｜軟體、AI 與裝置端實作
            </p>
            <p className="max-w-3xl text-base leading-8 text-amber-950/75 sm:text-lg">
              資訊管理系畢業，具備 Python、C/C++、HTML、CSS、JavaScript 與系統整合基礎。曾完成臉部表情辨識與肌肉分析系統，負責臉部表情模型建置，並獲得 113 學年度校內期末專題展第一名。目前也參與 ESP32 / WT32-ETH01 裝置端韌體、GPIO 訊號讀取、UART / RS232 通訊與後台串接相關實作，持續累積從資料處理、網頁展示到裝置整合的完整技術經驗。
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-amber-900/15 bg-white/35 px-3 py-1 text-sm font-medium text-amber-900"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              layoutId="nav-proj"
              onClick={() => setView('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-amber-900 px-5 py-3 text-sm font-bold text-amber-50 shadow-lg shadow-amber-900/15 transition-colors hover:bg-amber-800"
              whileHover={{ y: -2 }}
            >
              看實作專案
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              layoutId="nav-exp"
              onClick={() => setView('experience')}
              className="inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-white/45 px-5 py-3 text-sm font-bold text-amber-900 transition-colors hover:bg-white/70"
              whileHover={{ y: -2 }}
            >
              <User size={18} />
              技術與經歷
            </motion.button>
            <motion.button
              layoutId="nav-resume"
              onClick={() => setView('resume')}
              className="inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-white/45 px-5 py-3 text-sm font-bold text-amber-900 transition-colors hover:bg-white/70"
              whileHover={{ y: -2 }}
            >
              <FileText size={18} />
              履歷
            </motion.button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-amber-900/10 bg-white/55 p-5 shadow-2xl shadow-amber-900/10 backdrop-blur">
            <div className="overflow-hidden rounded-2xl bg-amber-100">
              <img
                src={assetPath('certs/profile.jpg')}
                alt="曾俊翰個人照"
                className="h-72 w-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-72 items-center justify-center bg-amber-900/10 text-amber-900/30">
                <User size={56} />
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:absolute lg:-left-8 lg:bottom-8 lg:mt-0 lg:w-56 lg:grid-cols-1">
            <div className="rounded-2xl border border-amber-900/10 bg-white/80 p-4 shadow-xl shadow-amber-900/10 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-900">
                <Trophy size={18} />
                專題成果
              </div>
              <p className="text-sm leading-6 text-amber-950/75">113 學年度校內期末專題展第一名</p>
            </div>
            <div className="rounded-2xl border border-amber-900/10 bg-white/80 p-4 shadow-xl shadow-amber-900/10 backdrop-blur lg:translate-x-24">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-900">
                <Cpu size={18} />
                目前實作
              </div>
              <p className="text-sm leading-6 text-amber-950/75">ESP32 / WT32-ETH01、GPIO、UART / RS232、I2C</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-3 border-t border-amber-900/10 pt-5">
        {compactHighlights.map((item) => (
          <span
            key={item}
            className="rounded-full bg-amber-950/10 px-4 py-2 text-sm font-semibold text-amber-900"
          >
            {item}
          </span>
        ))}
      </section>
    </motion.div>
  );
};

export default Hero;
