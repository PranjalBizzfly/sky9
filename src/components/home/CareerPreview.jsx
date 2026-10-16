import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { careerData } from '../../data/siteData';
import { Briefcase, ArrowRight } from 'lucide-react';
import CareerVisual from '../visuals/CareerVisual';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const CareerPreview = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <SectionHeader 
          badge="100% Placement Support"
          title="Launch Your Career Successfully"
          subtitle={careerData.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mt-4 sm:mt-8">
          {/* Services Cards Column with Glassmorphic Style & Dark Borders (3x2 Grid) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {careerData.services.map((service, index) => {
              const ServiceIcon = service.icon || Briefcase;
              const isDanglingLast = index === careerData.services.length - 1 && careerData.services.length % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl p-6 rounded-2xl border border-slate-300 dark:border-slate-800 hover:border-emerald-500/60 shadow-md hover:shadow-xl hover:shadow-emerald-950/20 transition duration-300 hover:-translate-y-1.5 group glass-panel ${isDanglingLast ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-13 h-13 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ServiceIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <CareerVisual />
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
            to="/career/career-opportunities-overview"
            className="btn-shimmer group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition duration-200 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            <span>Explore All Career Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerPreview;
