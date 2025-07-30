import React, { useState } from 'react';
import { examResults } from '../data/dummyData';

const ExamResults = () => {
  const [selectedExam, setSelectedExam] = useState('final');

  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600 dark:text-green-400' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600 dark:text-green-400' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-600 dark:text-blue-400' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-600 dark:text-blue-400' };
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-600 dark:text-yellow-400' };
    return { grade: 'D', color: 'text-red-600 dark:text-red-400' };
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    if (percentage >= 60) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    if (percentage >= 40) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
  };

  const currentExam = examResults[selectedExam];
  const totalMarks = currentExam.subjects.reduce((sum, subject) => sum + subject.marks, 0);
  const percentage = (totalMarks / currentExam.totalMarks) * 100;
  const gradeInfo = getGrade(percentage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Exam Results
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          View your performance in different examinations with detailed subject-wise analysis.
        </p>
      </div>

      {/* Exam Selection */}
      <div className="card">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedExam('midterm')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedExam === 'midterm'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Midterm Examination
          </button>
          <button
            onClick={() => setSelectedExam('final')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedExam === 'final'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Final Term Examination
          </button>
        </div>
      </div>

      {/* Overall Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {totalMarks}/{currentExam.totalMarks}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Marks</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {percentage.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Percentage</div>
          </div>
        </div>
        <div className="card">
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${gradeInfo.color}`}>
              {gradeInfo.grade}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Grade</div>
          </div>
        </div>
      </div>

      {/* Subject-wise Results */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Subject-wise Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Marks Obtained
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Marks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Percentage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {currentExam.subjects.map((subject, index) => {
                const subjectPercentage = (subject.marks / subject.totalMarks) * 100;
                const subjectGrade = getGrade(subjectPercentage);
                return (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {subject.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {subject.marks}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {subject.totalMarks}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {subjectPercentage.toFixed(1)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${subjectGrade.color}`}>
                        {subjectGrade.grade}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subjectPercentage)}`}>
                        {subjectPercentage >= 80 ? 'Excellent' : subjectPercentage >= 60 ? 'Good' : subjectPercentage >= 40 ? 'Average' : 'Needs Improvement'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Summary
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Best Subject:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {currentExam.subjects.reduce((best, current) => 
                  (current.marks / current.totalMarks) > (best.marks / best.totalMarks) ? current : best
                ).name}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Exam Date:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {new Date(currentExam.examDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Subjects:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {currentExam.subjects.length}
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Grade Distribution
          </h3>
          <div className="space-y-3">
            {['A+', 'A', 'B+', 'B', 'C', 'D'].map((grade) => {
              const count = currentExam.subjects.filter(subject => {
                const percentage = (subject.marks / subject.totalMarks) * 100;
                const subjectGrade = getGrade(percentage).grade;
                return subjectGrade === grade;
              }).length;
              
              return (
                <div key={grade} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Grade {grade}:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {count} subject{count !== 1 ? 's' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResults; 