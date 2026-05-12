import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const resumeImage = assetPath('certs/resume.png');
const resumePdf = assetPath('certs/resume.pdf');

const Resume = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-5xl space-y-6 pb-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
            Resume
          </p>
          <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">履歷</h1>
          <p className="mt-3 text-base leading-7 text-[#5B6475]">
            可線上瀏覽履歷圖片，也可以下載 PDF 版本。
          </p>
        </div>
        <a
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1E3A5F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2A9D8F]"
        >
          <ExternalLink size={18} />
          下載 PDF 履歷
        </a>
      </header>

      <div className="portfolio-card rounded-2xl p-3 sm:p-5">
        <div className="w-full overflow-hidden rounded-xl border border-[#DDE3EA] bg-white">
          <img
            src={resumeImage}
            alt="曾俊翰履歷圖片"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
