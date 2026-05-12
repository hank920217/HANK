import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, FileText, FolderGit2, Home, Mail } from 'lucide-react';

const navItems = [
  { id: 'landing', label: '首頁', icon: <Home size={17} /> },
  { id: 'projects', label: '實作專案', icon: <FolderGit2 size={17} /> },
  { id: 'experience', label: '技術經歷', icon: <BriefcaseBusiness size={17} /> },
  { id: 'resume', label: '履歷', icon: <FileText size={17} /> },
];

const Navigation = ({ view, setView, onContact }) => {
  return (
    <motion.nav
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-4xl -translate-x-1/2 px-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto flex items-center gap-2 overflow-x-auto rounded-full border border-[#DDE3EA] bg-white/95 p-2 shadow-lg shadow-[#172033]/10 backdrop-blur">
        {navItems.map((item) => {
          const active = view === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={`relative flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                active
                  ? 'bg-[#1E3A5F] text-white'
                  : 'text-[#5B6475] hover:bg-[#EAF3F2] hover:text-[#1E3A5F]'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={onContact}
          className="ml-auto flex shrink-0 items-center gap-2 rounded-full border border-[#2A9D8F]/35 px-3 py-2 text-sm font-semibold text-[#1E3A5F] transition-colors hover:bg-[#2A9D8F] hover:text-white sm:px-4"
        >
          <Mail size={17} />
          <span>聯絡我</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
