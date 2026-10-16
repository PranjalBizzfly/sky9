import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/siteData';
import { Quote, ArrowRight } from 'lucide-react';
import AboutVisual from '../visuals/AboutVisual';
import TypewriterHeading from '../common/animations/TypewriterHeading';
import SectionLabel from '../common/SectionLabel';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const AboutPreview = () => {
  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="order-2 lg:order-1 relative"
          >
            <AboutVisual />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            variants={fadeInUp}
            className="order-1 lg:order-2 space-y-4 sm:space-y-6"
          >
            <SectionLabel>About Us</SectionLabel>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading leading-tight">
              <TypewriterHeading text="Learn Today, Build Your Tomorrow" />
            </h2>
            
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {companyInfo.description}
            </p>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {companyInfo.fullDescription.substring(0, 200)}...
            </p>

            {/* Glass Quote Card with Dark Border */}
            <div className="pl-6 border-l-4 border-emerald-500 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-300 dark:border-slate-800 p-5 rounded-r-2xl relative shadow-md">
              <Quote className="absolute top-2.5 left-2.5 w-7 h-7 text-emerald-500/20" />
              <p className="text-slate-800 dark:text-slate-200 italic font-medium relative z-10 leading-relaxed text-sm sm:text-base">
                "Our mission is to help individuals build practical skills that can create meaningful career, professional, freelancing, and business opportunities."
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about/about-overview"
                className="btn-shimmer group inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition duration-200 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <span>Learn More About Sky9</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
