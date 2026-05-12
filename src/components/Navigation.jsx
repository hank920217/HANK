import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FolderGit2, Home, User } from 'lucide-react';

const Navigation = ({ view, setView }) => {
  const navItems = [
    { id: 'landing', label: '首頁', icon: <Home size={18} />, layoutId: 'nav-home' },
    { id: 'projects', label: '專案', icon: <FolderGit2 size={18} />, layoutId: 'nav-proj' },
    { id: 'experience', label: '經歷', icon: <User size={18} />, layoutId: 'nav-exp' },
    { id: 'resume', label: '履歷', icon: <FileText size={18} />, layoutId: 'nav-resume' },
  ];

  if (view === 'landing') return null;

  return (
    <motion.nav
      className="fixed top-0 right-0 z-50 p-4 sm:p-6"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex rounded-full border border-amber-900/10 bg-white/55 p-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            layoutId={item.layoutId}
            onClick={() => setView(item.id)}
            className={`
              relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4
              ${view === item.id
                ? 'text-amber-950'
                : 'text-amber-800 hover:bg-amber-900/10 hover:text-amber-950'}
            `}
          >
            {view === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-amber-400"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {item.icon}
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
