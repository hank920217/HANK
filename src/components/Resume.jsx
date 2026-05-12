import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const resumeImage = assetPath('certs/resume.png');
const resumePdf = assetPath('certs/resume.pdf');

const Resume = () => {
  return (
    <motion.div
      className="mx-auto w-full max-w-5xl pb-20 pt-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-6 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between">
        <h2 className="text-4xl font-bold text-amber-950">履歷</h2>
        <a
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-amber-900/20 bg-amber-900/10 px-5 py-2 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-900/20"
        >
          <ExternalLink size={18} />
          開啟 PDF
        </a>
      </div>

      <div className="rounded-2xl border border-amber-500/25 bg-amber-950/60 p-4 shadow-2xl md:p-6">
        <div className="w-full overflow-hidden rounded-xl bg-white">
          <img
            src={resumeImage}
            alt="曾俊翰履歷"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
