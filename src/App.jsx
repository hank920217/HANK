import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

function App() {
  const [view, setView] = useState('landing'); // landing, experience, projects, resume

  return (
    <div className="min-h-screen text-warm-white font-sans selection:bg-amber-500/30">
      
      {/* Navigation - Always present but changes state based on view */}
      <Navigation view={view} setView={setView} />

      <main className="relative z-10 container mx-auto min-h-screen px-4 py-8">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <Hero key="hero" setView={setView} />
          )}
          
          {view === 'experience' && (
            <Experience key="experience" />
          )}

          {view === 'projects' && (
            <Projects key="projects" />
          )}

          {view === 'resume' && (
            <Resume key="resume" />
          )}
        </AnimatePresence>
      </main>

      {/* Decorative Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-800/20 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default App;
