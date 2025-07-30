import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Topbar = ({ onMenuClick, currentPath }) => {
  const { isDark, toggleTheme } = useTheme();

  const getPageTitle = (path) => {
    switch (path) {
      case '/':
        return 'Dashboard';
      case '/syllabus':
        return 'Syllabus';
      case '/exam-results':
        return 'Exam Results';
      case '/fees':
        return 'Fees';
      case '/notifications':
        return 'Notifications';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Page title */}
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white lg:ml-0">
          {getPageTitle(currentPath)}
        </h1>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle for desktop */}
          <button
            onClick={toggleTheme}
            className="hidden lg:flex items-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* User profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Rahul Sharma</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Class 10A</p>
            </div>
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">RS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar; 