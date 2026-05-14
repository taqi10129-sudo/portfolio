import { motion } from 'motion/react';
import { EXPERIENCES } from '@/constants';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Professional <span className="text-slate-500">Experience</span></h3>
        </div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-slate-800 to-transparent -translate-x-1/2 hidden md:block" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-[-1.5rem] md:left-1/2 top-0 w-12 h-12 glass rounded-full flex items-center justify-center border border-primary/40 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1 glass p-8 rounded-3xl border-t-4 border-t-primary/60 transition-all hover:bg-slate-900/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-primary font-medium tracking-wide">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-sm text-slate-400 font-mono">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed group">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
