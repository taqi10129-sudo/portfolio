import { motion } from 'motion/react';
import { ArrowRight, Settings, Cpu, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Industrial Automation & DCS Expert";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Directing Industrial Evolution
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Engineering <span className="text-primary neon-text">Decisions</span> That <br />
            Control, Connect, <br />
            and <span className="text-slate-500">Accelerate</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
            Hi, I'm <span className="text-white font-bold">Muhammad Taqi</span>. With over 10 years of mastery in 
            <span className="text-primary font-medium"> HollySys DCS</span> and <span className="text-primary font-medium">Automation Systems</span>, 
            I'm ready to architect your next industrial milestone.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl bg-primary text-secondary font-black text-sm tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-white/60 hover:text-primary font-bold text-sm tracking-widest uppercase group transition-all"
            >
              View Case Studies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex items-center gap-12 border-t border-white/5 pt-8 w-full max-w-sm">
            <div>
              <p className="text-2xl font-black text-white">45+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Deployments</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">99%</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">12+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Mills Optimized</p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative flex justify-center"
        >
          {/* Main Visual Component - Circular Profile Style from reference */}
          <div className="relative w-full max-w-[500px] aspect-square">
            <div className="absolute inset-4 rounded-full border-2 border-primary/20 -z-10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border border-white/5 -z-10 animate-[spin_30s_linear_infinite_reverse]" />
            
            <div className="relative z-10 w-full h-full rounded-full p-4 border border-white/10 glass overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
                alt="Muhammad Taqi" 
                className="w-full h-full object-cover rounded-full grayscale mix-blend-luminosity brightness-75 transition-all duration-700 hover:grayscale-0 hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Orbiting Icons matching reference style */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-4 rounded-2xl border border-primary/30 pointer-events-auto">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 glass p-4 rounded-2xl border border-white/20 pointer-events-auto">
                <Cpu className="w-6 h-6 text-slate-400" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 glass p-4 rounded-2xl border border-white/20 pointer-events-auto">
                <ShieldCheck className="w-6 h-6 text-slate-400" />
              </div>
            </motion.div>
            
            {/* Center Pulsing Arc */}
            <div className="absolute inset-[-20px] rounded-full border-t-2 border-primary opacity-50 blur-[2px] animate-[spin_3s_linear_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
