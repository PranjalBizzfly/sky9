import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { courses } from '../../data/siteData';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import CourseSpotlightVisual from '../visuals/CourseSpotlightVisual';
import TypewriterHeading from '../common/animations/TypewriterHeading';
import SectionLabel from '../common/SectionLabel';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const CourseSpotlight = ({ courseSlug, reversed }) => {
  const course = courses.find(c => c.slug === courseSlug);
  
  if (!course) return null;

  return (
    <section className="py-6 sm:py-10 md:py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className={`space-y-4 sm:space-y-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <SectionLabel>Featured Program</SectionLabel>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              <TypewriterHeading text={course.title} />
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {course.overview || course.description}
            </p>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-white">Key Modules:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.modules?.slice(0, 4).map((module, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{module.title || module}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <Link to={contentRepository.getCourseUrl(course.slug)} className="btn-shimmer inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300 group">
                Explore {course.title}
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <CourseSpotlightVisual courseSlug={course.slug} />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CourseSpotlight;
