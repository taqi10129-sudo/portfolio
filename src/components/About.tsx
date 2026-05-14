import { motion } from 'motion/react';
import { Lightbulb, Settings, Network, Gauge } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '45+', icon: Settings },
    { label: 'Sugar Mills Optimized', value: '12', icon: Gauge },
    { label: 'Industrial Networks', value: '25+', icon: Network },
    { label: 'System Uptime', value: '99.9%', icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Pioneering Progress in <br /><span className="text-slate-500">Industrial Worlds</span></h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I am a results-driven Professional Engineer with extensive experience in **HollySys DCS**, **PLC**, and **SCADA** systems. My journey is rooted in the demanding environments of the Sugar Industry, where I've spent years mastering process house automation and Mill House monitoring.
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              I specialize in bridging the gap between mechanical hardware and high-level software. My passion lies in creating centralized monitoring systems that don't just work—they excel under pressure. From Boiler instrumentation to Refine Batch Pan systems, I deliver precision.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-l-2 border-l-primary/50">
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Stack" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                 <p className="text-slate-200 font-medium italic">
                   "Continuous monitoring is the pulse of industrial efficiency. My goal is to keep that pulse strong and steady."
                 </p>
                 <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-secondary">MT</div>
                    <div>
                      <p className="text-sm font-bold text-white">Muhammad Taqi</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">Lead Automation Specialist</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
