import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import FeatureCard from '../common/FeatureCard';
import { whyChooseUs } from '../../data/siteData';
import WhySky9Visual from '../visuals/WhySky9Visual';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const WhyChooseUs = () => {
  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10 md:pb-14 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Why Sky9"
          title="Why Choose Sky9 India"
          subtitle="Education Designed for the Real World"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8"
        >
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={index === whyChooseUs.length - 1 && whyChooseUs.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting Quadrant Visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-6 sm:mt-10 md:mt-12"
        >
          <WhySky9Visual />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
