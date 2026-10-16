import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  // Normalize items so that if 'Home' is passed as the first item, it doesn't duplicate the root Home link
  const normalizedItems = items.filter(
    (item, index) => !(index === 0 && (item.label?.toLowerCase() === 'home' || item.path === '/'))
  );

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        
        {normalizedItems.map((item, index) => {
          const isLast = index === normalizedItems.length - 1;
          
          return (
            <li key={index}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
                {isLast ? (
                  <span className="ml-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 md:ml-2">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="ml-1 text-sm font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 md:ml-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
