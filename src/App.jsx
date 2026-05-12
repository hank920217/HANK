import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

function App() {
  const [view, setView] = useState('landing');
  const [contactRequest, setContactRequest] = useState(0);

  const showContact = () => {
    setView('experience');
    setContactRequest((current) => current + 1);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans text-[#172033] selection:bg-[#2A9D8F]/20">
      <Navigation view={view} setView={setView} onContact={showContact} />

      <main className="relative mx-auto min-h-screen w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <Hero key="hero" setView={setView} onContact={showContact} />
          )}

          {view === 'projects' && <Projects key="projects" />}

          {view === 'experience' && (
            <Experience key="experience" contactRequest={contactRequest} />
          )}

          {view === 'resume' && <Resume key="resume" />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
