import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, FileText, FolderGit2, Home, Mail } from 'lucide-react';

const navItems = [
  { id: 'landing', label: 'Home', icon: <Home size={17} /> },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 size={17} /> },
  { id: 'experience', label: 'Experience', icon: <BriefcaseBusiness size={17} /> },
  { id: 'resume', label: 'Resume', icon: <FileText size={17} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={17} /> },
];

const Navigation = ({ view, setView }) => {
  return (
    <motion.nav
      className="fixed inset-x-0 top-2 z-50 mx-auto w-[calc(100%-0.75rem)] px-1 sm:top-3 sm:w-[calc(100%-1rem)] sm:px-2 lg:inset-x-auto lg:right-5 lg:top-5 lg:mx-0 lg:w-auto lg:px-0"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto grid grid-cols-5 gap-1 rounded-2xl border border-[#DDE3EA] bg-white/95 p-1.5 shadow-lg shadow-[#172033]/10 backdrop-blur lg:flex lg:items-center lg:gap-1.5 lg:rounded-full">
        {navItems.map((item) => {
          const active = view === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={`relative flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-2 text-[11px] font-semibold leading-none transition-colors lg:flex-row lg:gap-1.5 lg:rounded-full lg:px-3 lg:text-sm ${
                active
                  ? 'bg-[#1E3A5F] text-white'
                  : 'text-[#5B6475] hover:bg-[#EAF3F2] hover:text-[#1E3A5F]'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="max-w-full truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
