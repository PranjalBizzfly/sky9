import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/siteData';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Testimonials = () => {
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-6 sm:py-10 md:py-14 bg-slate-50 dark:bg-slate-800/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Success Stories"
          title="Real People, Real Learning Journeys"
          subtitle="Real experiences from students, career switchers, and entrepreneurs building practical skills with Sky9 India."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8 md:mt-16"
        >
          {displayTestimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.334rem)]">
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
