import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications = () => {
  const certs = [
    { title: 'HollySys DCS Expert Certification', issuer: 'HollySys Industrial', date: '2021' },
    { title: 'Advanced PLC Programming (S7-1500)', issuer: 'Siemens Training Center', date: '2019' },
    { title: 'Industrial Networking Specialist', issuer: 'Cisco Networking Academy', date: '2020' },
    { title: 'Instrumentation & Process Control', issuer: 'National Engineering Institute', date: '2018' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Credentials</h2>
          <h3 className="text-4xl font-bold">Industry <span className="text-slate-500">Recognitions</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border-b-2 border-b-transparent hover:border-b-primary transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">{cert.issuer}</p>
              <h4 className="text-lg font-bold text-white mb-4 leading-snug">{cert.title}</h4>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-slate-500 font-mono italic">{cert.date}</span>
                <ExternalLink className="w-4 h-4 text-slate-600 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
