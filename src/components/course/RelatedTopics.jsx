import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import contentRepository from '../../services/contentRepository';

export default function RelatedTopics({ topics = [], courseTitle = 'this course' }) {
  if (!topics || topics.length === 0) return null;

  return (
    <section className="py-8 sm:py-10 md:py-12 dark:bg-slate-900/50 bg-slate-50 border-t border-b dark:border-slate-800 border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mb-4 sm:mb-6 font-heading">
          Specific Topic Modules in {courseTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((item) => (
            <Link
              key={item.slug}
              to={contentRepository.getTopicUrl(item.parent, item.slug)}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] p-5 rounded-xl dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 hover:border-emerald-500/50 transition duration-300 group flex items-center justify-between shadow-sm glass-panel"
            >
              <div>
                <h4 className="font-semibold dark:text-white text-slate-900 group-hover:text-emerald-500 transition-colors text-sm">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-xs dark:text-slate-400 text-slate-500 mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
