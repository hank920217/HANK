import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const resumePdf = assetPath('certs/resume.pdf');

const Resume = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto pb-20"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">履歷</h2>

      <div className="bg-amber-950/60 border border-amber-500/25 rounded-2xl p-4 md:p-6 shadow-2xl">
        <div className="aspect-[768/1058] w-full rounded-xl overflow-hidden bg-amber-900/30">
          <object
            data={resumePdf}
            type="application/pdf"
            className="w-full h-full"
            aria-label="曾俊翰履歷"
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-amber-200/70 px-6 text-center">
              <FileText size={56} className="mb-4 opacity-70" />
              <p className="text-lg font-semibold mb-2">無法預覽履歷 PDF</p>
              <a
                href={resumePdf}
                className="text-sm md:text-base text-amber-100 underline underline-offset-4 hover:text-amber-300"
              >
                開啟履歷 PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
