import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { certificationData } from '../../data/siteData';
import { Award, ArrowRight } from 'lucide-react';
import CertificationVisual from '../visuals/CertificationVisual';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const CertificationPreview = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          badge="Certification"
          title="Industry-Recognized Credentials"
          subtitle={certificationData.description}
        />

        <div className="mt-4 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Internal Cert Card + Visual Mockup */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <CertificationVisual />
          </motion.div>

          {/* External Certs Grid with Glassmorphic Style & Dark Borders */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {certificationData.externalCerts.map((cert, index) => {
              const CertIcon = cert.icon;
              const isDanglingLast = index === certificationData.externalCerts.length - 1 && certificationData.externalCerts.length % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl rounded-2xl p-6 border border-slate-300 dark:border-slate-800 hover:border-emerald-500/60 shadow-md hover:shadow-xl hover:shadow-emerald-950/20 transition duration-300 hover:-translate-y-1.5 flex flex-col group glass-panel ${isDanglingLast ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CertIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm flex-grow leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Link
            to="/certification/certification-overview"
            className="btn-shimmer group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition duration-200 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            <span>Explore All Certifications</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationPreview;
