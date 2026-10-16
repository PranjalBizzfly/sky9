import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/siteData';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import FinalCtaVisual from '../visuals/FinalCtaVisual';
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

const FinalCTA = () => {
  const phone = companyInfo?.phone || companyInfo?.contact?.phone || '+91 7 319 419 519';
  const email = companyInfo?.email || companyInfo?.contact?.email || 'info@Sky9India.com';

  return (
    <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 dark:from-emerald-900 dark:via-emerald-800 dark:to-emerald-900">
      {/* Decorative background ambient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.12 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel tone="onBrand">Transform Your Future</SectionLabel>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading leading-tight">
              <TypewriterHeading text="Ready To Build Your Future?" light />
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-emerald-100 leading-relaxed max-w-xl">
              The right time to start learning is when you decide to invest in yourself. Whether you want to start a new career, upgrade your skills, explore technology, or grow your business, Sky9 India can help you begin your journey. Learn New Skills. Build Real Confidence. Create New Opportunities.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="btn-shimmer group w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-bold rounded-xl transition duration-200 shadow-xl shadow-emerald-950/20 text-center flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact-us"
                className="btn-shimmer w-full sm:w-auto px-8 py-4 border-2 border-white/80 text-white hover:bg-white/10 font-bold rounded-xl transition duration-200 text-center hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Talk to Admissions
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-emerald-100 text-sm">
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2.5 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-200" />
                </div>
                <span className="font-semibold">{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2.5 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-200" />
                </div>
                <span className="font-semibold">{email}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <FinalCtaVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
