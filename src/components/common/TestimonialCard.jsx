import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Picture from './Picture';

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="backdrop-blur-xl bg-white/85 dark:bg-slate-900/85 border border-slate-300 dark:border-slate-800 hover:border-emerald-500/50 p-8 rounded-2xl flex flex-col h-full relative transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-950/20 group glass-panel"
    >
      <div className="absolute top-8 right-8 text-emerald-500/15 dark:text-emerald-500/10 transition-transform duration-300 group-hover:scale-110">
        <Quote className="w-14 h-14 fill-current" />
      </div>
      
      {/* 5-Star Rating */}
      <div className="flex gap-1 mb-5 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < (testimonial?.rating || 5) ? 'fill-emerald-500 text-emerald-500' : 'fill-slate-200 dark:fill-slate-700 text-slate-200 dark:text-slate-700'}`} 
          />
        ))}
      </div>
      
      {/* Testimonial Quote Text */}
      <p className="text-slate-800 dark:text-slate-200 text-base sm:text-[15px] italic mb-8 flex-grow relative z-10 leading-relaxed font-normal">
        "{testimonial?.text}"
      </p>
      
      {/* Author Details */}
      <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-200/80 dark:border-slate-800">
        {testimonial?.image ? (
          <Picture
            src={testimonial.image}
            webp={testimonial.webp}
            alt={testimonial.alt || `${testimonial.name} - ${testimonial.role}`}
            className="w-12 h-12 rounded-full object-cover object-top border-2 border-emerald-500/50 shadow-md flex-shrink-0"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-lg uppercase shadow-sm flex-shrink-0">
            {testimonial?.name?.charAt(0) || 'S'}
          </div>
        )}
        <div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white font-heading">
            {testimonial?.name}
          </h4>
          <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {testimonial?.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
