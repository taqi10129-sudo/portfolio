import { motion } from 'motion/react';
import { SKILLS } from '@/constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Expertise & <span className="text-slate-500">Systems</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
              
              <div className="flex justify-between items-end mb-4">
                <div>
                   <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{skill.category}</p>
                   <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                </div>
                <span className="text-2xl font-mono text-slate-500 tabular-nums">{skill.level}%</span>
              </div>

              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent relative"
                >
                  <div className="absolute top-0 right-0 h-full w-2 bg-white/40 blur-[2px]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 invert brightness-100"
        >
          {/* Simulation of Industry Brands */}
          <span className="text-2xl font-bold tracking-tighter">SIEMENS</span>
          <span className="text-2xl font-bold tracking-tighter">SCHNEIDER</span>
          <span className="text-2xl font-bold tracking-tighter">HOLLYSYS</span>
          <span className="text-2xl font-bold tracking-tighter">ABB</span>
          <span className="text-2xl font-bold tracking-tighter">ROCKWELL</span>
        </motion.div>
      </div>
    </section>
  );
};
