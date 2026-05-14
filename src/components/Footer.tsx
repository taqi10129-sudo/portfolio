import { Cpu, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 glass">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-secondary transition-all">
              <Cpu className="w-6 h-6 text-primary group-hover:text-secondary" />
            </div>
            <div>
               <p className="text-xl font-bold tracking-tighter text-white">M.TAQI</p>
               <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Automation Expert</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <a href="#about" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase">About</a>
            <a href="#skills" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase">Knowledge</a>
            <a href="#experience" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase">Career</a>
            <a href="#projects" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase">Works</a>
          </div>

          <div className="text-slate-500 text-xs font-mono tracking-wider">
            &copy; {new Date().getFullYear()} MUHAMMAD TAQI. ALL SYSTEMS GO.
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/5 pt-8">
           <p className="text-[10px] text-slate-600 flex items-center gap-1 uppercase tracking-widest">
             Built with Precision <Heart className="w-3 h-3 text-red-500" /> for the Industrial World
           </p>
        </div>
      </div>
    </footer>
  );
};
