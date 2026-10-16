import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Briefcase, Award } from 'lucide-react';

export default function WhySky9Visual() {
  const quadrants = [
    {
      icon: ShieldCheck,
      title: '100% Practical Labs',
      desc: 'Live campaigns, real tools, no theoretical filler',
      badge: 'Hands-on'
    },
    {
      icon: UserCheck,
      title: 'Expert Mentors',
      desc: '1-on-1 guidance from active industry practitioners',
      badge: 'Mentorship'
    },
    {
      icon: Briefcase,
      title: 'Integrated Internship',
      desc: '1-month real workplace project experience',
      badge: 'Guaranteed'
    },
    {
      icon: Award,
      title: 'Verified Credentials',
      desc: 'Global certification prep & QR code verification',
      badge: 'Recognized'
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {quadrants.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-300 dark:border-slate-800 hover:border-emerald-500/60 shadow-lg hover:shadow-xl hover:shadow-emerald-950/20 transition duration-300 hover:-translate-y-1 flex flex-col justify-between group glass-panel"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
