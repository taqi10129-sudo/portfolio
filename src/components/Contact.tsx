import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook, PhoneOutgoing as WhatsApp } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-taqi', label: 'LinkedIn', color: '#0077b5' },
    { icon: Github, href: 'https://github.com/taqi10129', label: 'GitHub', color: '#ffffff' },
    { icon: WhatsApp, href: 'https://wa.me/1234567890', label: 'WhatsApp', color: '#25D366' },
    { icon: Facebook, href: 'https://facebook.com/muhammad.taqi', label: 'Facebook', color: '#1877F2' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Inquiry</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8">Start a <span className="text-slate-500">Conversation</span></h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
              Have an industrial automation challenge or a potential project? I'm always open to discussing new opportunities and technical solutions.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Email</p>
                   <a href="mailto:taqi10129@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">taqi10129@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Phone / WhatsApp</p>
                   <p className="text-xl font-bold text-white transition-colors">+92 XXX XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Location</p>
                   <p className="text-xl font-bold text-white transition-colors">Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5, backgroundColor: social.color }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center transition-all group"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-black" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                  <option>Industrial Consultation</option>
                  <option>Project Inquiry</option>
                  <option>Professional Networking</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can I help you today?"
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-primary text-secondary font-black tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Launch Communication <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
