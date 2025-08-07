import React from 'react';
import { Link } from 'react-router-dom';
import { studentInfo, examResults, feesData, notifications } from '../data/dummyData';

const Dashboard = () => {
  const pendingFees = feesData.filter(fee => fee.status === 'Pending').length;
  const totalFees = feesData.length;
  const recentNotifications = notifications.slice(0, 3);

  const getGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'D';
  };

  const latestExam = examResults.final;
  const totalMarks = latestExam.subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const percentage = (totalMarks / latestExam.totalMarks) * 100;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back, {studentInfo.name}!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {studentInfo.class} • Roll No: {studentInfo.rollNumber}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Current Date</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/exam-results" className="card hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Latest Exam Grade</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{getGrade(percentage)}</p>
            </div>
          </div>
        </Link>

        <Link to="/fees" className="card hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fees Status</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalFees - pendingFees}/{totalFees}</p>
            </div>
          </div>
        </Link>

        <Link to="/notifications" className="card hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4.19A2 2 0 006 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Notifications</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{notifications.length}</p>
            </div>
          </div>
        </Link>

        <Link to="/syllabus" className="card hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Subjects</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Notifications */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Notifications</h3>
          <Link to="/notifications" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {recentNotifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {notification.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(notification.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 