import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers, CheckCircle } from 'lucide-react';
import contentRepository from '../../services/contentRepository';
import seoPageEngine from '../../services/seoPageEngine';
import CourseCard from './CourseCard';
import SectionHeader from './SectionHeader';

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function RelatedContent({
  currentSlug = '',
  category = '',
  relatedCourse = null,
  title = "Related Learning Pathways",
  subtitle = "Explore connected practical topics, courses, and specialization guides."
}) {
  const allCourses = contentRepository.getAllCourses();
  const allPages = seoPageEngine.getInventory();

  // Find related courses excluding current
  const filteredCourses = (relatedCourse
    ? [relatedCourse, ...allCourses.filter(c => c.slug !== relatedCourse.slug)]
    : allCourses.filter(c => c.slug !== currentSlug)
  ).slice(0, 3);

  // Find related SEO pages matching category or topic
  const relatedPages = allPages
    .filter(p => p.slug !== currentSlug && (p.category === category || p.type === 'topic' || p.type === 'subtopic'))
    .slice(0, 4);

  return (
    <section className="py-8 sm:py-14 md:py-24 dark:bg-slate-900/50 bg-slate-50 border-t dark:border-slate-800 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-6 sm:space-y-12">
        <SectionHeader
          badge="Internal Link Engine"
          title={title}
          subtitle={subtitle}
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => {
            const danglingAtMd = idx === filteredCourses.length - 1 && filteredCourses.length % 2 !== 0;
            return (
              <div key={course.id} className={danglingAtMd ? 'md:col-span-2 lg:col-span-1' : ''}>
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>

        {/* Related Specialization Links */}
        {relatedPages.length > 0 && (
          <div className="p-8 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-slate-200 shadow-sm glass-panel">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-6 font-heading flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" />
              Connected Specializations & Topics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedPages.map((page, idx) => {
                const danglingAtSm = idx === relatedPages.length - 1 && relatedPages.length % 2 !== 0;
                return (
                  <motion.div
                    key={page.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.05 }}
                    className={danglingAtSm ? 'sm:col-span-2 md:col-span-1' : ''}
                  >
                    <Link
                      to={`/${page.slug}`}
                      className="p-4 rounded-xl dark:bg-slate-700/40 bg-slate-50 hover:bg-emerald-50 dark:hover:bg-slate-700 border dark:border-slate-700 border-slate-200 transition flex flex-col justify-between h-full group glass-panel"
                    >
                      <div>
                        <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-wider block mb-1">
                          {page.type}
                        </span>
                        <h4 className="text-sm font-bold dark:text-white text-slate-900 group-hover:text-emerald-500 transition-colors line-clamp-2">
                          {page.title}
                        </h4>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 mt-3 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
