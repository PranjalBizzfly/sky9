import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import SectionLabel from '../common/SectionLabel';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function MissionVisionCommitmentSection() {
  const cards = [
    {
      id: 'mission',
      badge: 'Our Mission',
      title: 'Empowering People Through Practical Skills',
      description: 'Our mission is to help individuals build practical skills that can create meaningful career, professional, freelancing, and business opportunities. We want learners to feel confident when they enter the professional world by giving them knowledge that goes beyond textbooks and theoretical education.',
      link: '/about/our-mission',
      icon: Target,
      highlights: ['80% Practical execution', 'Live tool training', 'Day-one job readiness']
    },
    {
      id: 'vision',
      badge: 'Our Vision',
      title: 'Creating a Future-Ready Learning Community',
      description: 'Our vision is to become a trusted destination for practical education, digital skills, technology training, and professional development, helping learners from different backgrounds develop the confidence to adapt to changing industries.',
      link: '/about/our-vision',
      icon: Eye,
      highlights: ['Pan-India reach', 'Industry alignment', 'Continuous innovation']
    },
    {
      id: 'commitment',
      badge: 'Our Commitment',
      title: 'Helping You Move Forward With Confidence',
      description: 'Our commitment is to help learners move forward step by step. Through structured programs, mentorship, practical exposure, and industry-focused guidance, we aim to make the learning journey more meaningful and effective.',
      link: '/about/our-commitment',
      icon: ShieldCheck,
      highlights: [
        'Structured programs',
        '1-on-1 Mentorship',
        'Practical exposure',
        'Industry-focused guidance'
      ]
    }
  ];

  return (
    <section className="py-6 sm:py-10 md:py-14 bg-slate-50/70 dark:bg-slate-900/60 transition-colors duration-300 border-t border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Our Foundation"
          title="Mission, Vision & Commitment"
          subtitle="Built on strong values and dedicated to delivering industry-ready transformation."
        />

        {/* 1 Row, 3 Equal Columns on Desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 sm:gap-8 mt-4 sm:mt-8 md:mt-12 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isDanglingLast = idx === cards.length - 1 && cards.length % 2 !== 0;
            return (
              <motion.div key={card.id} variants={fadeInUp} className={`h-full ${isDanglingLast ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.18)] border border-white/80 dark:border-slate-700/60 hover:border-emerald-500/70 dark:hover:border-emerald-400/70 hover:-translate-y-2 transition duration-300 flex flex-col justify-between h-full group glass-panel">
                  <div>
                    {/* Header Icon & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-13 h-13 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <SectionLabel>{card.badge}</SectionLabel>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>

                    {/* Highlights List */}
                    {card.highlights && (
                      <div className="space-y-2.5 mb-6 pt-3.5 border-t border-slate-200/70 dark:border-slate-800">
                        {card.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800">
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
