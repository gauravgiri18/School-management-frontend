import React from 'react';
import { subjects } from '../data/dummyData';

const Syllabus = () => {
  const handleDownload = (url, subjectName) => {
    // In a real app, this would trigger an actual download
    // For demo purposes, we'll just show an alert
    alert(`Downloading ${subjectName} syllabus...\nURL: ${url}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Subject Syllabus
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Download syllabus for all subjects. Click on the download button to get the PDF files.
        </p>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Subject ID: {subject.id}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              {subject.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF Format
              </div>
              <button
                onClick={() => handleDownload(subject.syllabusUrl, subject.name)}
                className="btn-primary text-sm"
              >
                <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Syllabus Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Important Notes:</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                All syllabus files are in PDF format for easy viewing and printing
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Download and save files for offline access
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Syllabus is updated annually by the academic board
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Contact your subject teachers for any clarifications
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Academic Year:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              2024-2025
            </p>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Total Subjects:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {subjects.length} subjects
            </p>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Last Updated:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus; 