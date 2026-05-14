import { motion } from 'motion/react';
import { PROJECTS } from '@/constants';
import { ExternalLink, Github, Layers } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4 text-center md:text-left">Portfolio</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-center md:text-left">Key Case <span className="text-slate-500">Studies</span></h3>
          </div>
          <div className="flex gap-4 self-center">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Industry focus</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full glass text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> LIVE CASE
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> ARCHITECTURE
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
