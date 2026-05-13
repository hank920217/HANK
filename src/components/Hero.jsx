import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Cpu,
  Download,
  FileText,
  Mail,
  Trophy,
  User,
} from 'lucide-react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const skillTags = [
  'Python',
  'C / C++',
  'MediaPipe',
  'ESP32',
  'GPIO',
  'UART / RS232',
  'HTML / CSS',
  'JavaScript',
];

const compactHighlights = ['臉部表情模型建置', '裝置端通訊整合', '高雄榮總資訊部實習'];

const Hero = ({ setView, onContact }) => {
  const resumePdf = assetPath('certs/resume.pdf');

  return (
    <motion.div
      className="mx-auto flex w-full max-w-6xl flex-col gap-8"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45 }}
    >
      <section className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="space-y-6 text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DDE3EA] bg-white px-4 py-2 text-sm font-semibold text-[#1E3A5F] shadow-sm">
            <BriefcaseBusiness size={16} />
            Personal Technical Portfolio
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-[#172033] sm:text-5xl lg:text-6xl">
              曾俊翰 Howard
            </h1>
            <p className="text-xl font-semibold text-[#1E3A5F] sm:text-2xl">
              資訊管理背景｜軟體、AI 與裝置端實作
            </p>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-[#5B6475] sm:text-lg">
              <p>
                資訊管理系畢業，具備 Python、C/C++、HTML、CSS、JavaScript 與系統整合基礎。
              </p>
              <p>
                曾完成臉部表情辨識與肌肉分析系統，負責臉部表情模型建置，並獲得 113 學年度校內期末專題展第一名。目前也參與 ESP32 / WT32-ETH01 裝置端韌體、GPIO 訊號讀取、UART / RS232 通訊與後台串接相關實作。
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#DDE3EA] bg-white px-3 py-1 text-sm font-semibold text-[#1E3A5F]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setView('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1E3A5F]/15 transition-colors hover:bg-[#2A9D8F]"
            >
              查看實作專案
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => setView('experience')}
              className="inline-flex items-center gap-2 rounded-full border border-[#DDE3EA] bg-white px-5 py-3 text-sm font-bold text-[#1E3A5F] transition-colors hover:border-[#2A9D8F] hover:text-[#2A9D8F]"
            >
              <FileText size={18} />
              查看技術經歷
            </button>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#DDE3EA] bg-white px-5 py-3 text-sm font-bold text-[#1E3A5F] transition-colors hover:border-[#2A9D8F] hover:text-[#2A9D8F]"
            >
              <Download size={18} />
              下載 PDF 履歷
            </a>
            <button
              type="button"
              onClick={onContact}
              className="inline-flex items-center gap-2 rounded-full border border-[#2A9D8F]/35 bg-[#EAF3F2] px-5 py-3 text-sm font-bold text-[#1E3A5F] transition-colors hover:bg-[#2A9D8F] hover:text-white"
            >
              <Mail size={18} />
              聯絡我
            </button>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col gap-4 lg:max-w-md">
          <div className="portfolio-card rounded-3xl p-4">
            <div className="overflow-hidden rounded-2xl bg-[#EAF3F2]">
              <img
                src={assetPath('certs/profile.jpg')}
                alt="曾俊翰個人照片"
                className="h-60 w-full object-contain object-center sm:h-72"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-60 items-center justify-center text-[#1E3A5F]/30 sm:h-72">
                <User size={56} />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="portfolio-card rounded-2xl p-5 lg:-translate-y-2">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#1E3A5F]">
                <Trophy size={18} className="text-[#2A9D8F]" />
                專題成果
              </div>
              <p className="text-sm leading-6 text-[#5B6475]">
                113 學年度校內期末專題展第一名
              </p>
            </article>
            <article className="portfolio-card rounded-2xl p-5 lg:translate-y-3">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#1E3A5F]">
                <Cpu size={18} className="text-[#2A9D8F]" />
                目前實作
              </div>
              <p className="text-sm leading-6 text-[#5B6475]">
                ESP32 / WT32-ETH01、GPIO、UART / RS232、I2C
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="portfolio-soft flex flex-wrap justify-center gap-3 rounded-2xl px-4 py-4">
        {compactHighlights.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E3A5F] shadow-sm"
          >
            {item}
          </span>
        ))}
      </section>
    </motion.div>
  );
};

export default Hero;
