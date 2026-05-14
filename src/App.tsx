/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for premium loading feel
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background selection:bg-primary selection:text-secondary">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                borderColor: ["rgba(0,229,255,0.2)", "rgba(0,229,255,1)", "rgba(0,229,255,0.2)"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary relative mb-8"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-secondary font-bold text-xs bg-primary px-2 py-1 rounded">DCS</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-primary/20 rounded-full overflow-hidden mb-4"
            >
              <motion.div 
                className="h-full bg-primary"
                animate={{ x: [-200, 200] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-mono uppercase tracking-[0.5em] text-primary animate-pulse"
            >
              INITIALIZING SYSTEMS...
            </motion.p>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Projects />
            <Contact />
            <Footer />
            
            {/* Back to top button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center border border-primary/30 z-40 hover:bg-primary hover:text-secondary shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

