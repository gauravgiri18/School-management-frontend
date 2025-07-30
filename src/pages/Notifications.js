import React, { useState } from 'react';
import { notifications } from '../data/dummyData';

const Notifications = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);

  const filteredNotifications = notifications.filter(notification => {
    if (selectedType === 'all') return true;
    return notification.type === selectedType;
  });

  const getTypeColor = (type) => {
    switch (type) {
      case 'event':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'competition':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'meeting':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'exhibition':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'event':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'competition':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'meeting':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'exhibition':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4.19A2 2 0 006 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
          </svg>
        );
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'event':
        return 'Event';
      case 'competition':
        return 'Competition';
      case 'meeting':
        return 'Meeting';
      case 'exhibition':
        return 'Exhibition';
      default:
        return 'Notification';
    }
  };

  const isUpcoming = (date) => {
    return new Date(date) > new Date();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Notifications & Events
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Stay updated with school events, competitions, and important announcements.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="card">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedType === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setSelectedType('event')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedType === 'event'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Events ({notifications.filter(n => n.type === 'event').length})
          </button>
          <button
            onClick={() => setSelectedType('competition')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedType === 'competition'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Competitions ({notifications.filter(n => n.type === 'competition').length})
          </button>
          <button
            onClick={() => setSelectedType('meeting')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedType === 'meeting'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Meetings ({notifications.filter(n => n.type === 'meeting').length})
          </button>
        </div>
      </div>

      {/* Notifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id} 
            className="card hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={() => setSelectedNotification(notification)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${getTypeColor(notification.type)}`}>
                  {getTypeIcon(notification.type)}
                </div>
                <div className="ml-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(notification.type)}`}>
                    {getTypeLabel(notification.type)}
                  </span>
                </div>
              </div>
              {isUpcoming(notification.date) && (
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  Upcoming
                </span>
              )}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {notification.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
              {notification.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(notification.date).toLocaleDateString()}
              </div>
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notification Detail Modal */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${getTypeColor(selectedNotification.type)}`}>
                    {getTypeIcon(selectedNotification.type)}
                  </div>
                  <div className="ml-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(selectedNotification.type)}`}>
                      {getTypeLabel(selectedNotification.type)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {selectedNotification.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {selectedNotification.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Date: {new Date(selectedNotification.date).toLocaleDateString()}</span>
              </div>

              {isUpcoming(selectedNotification.date) && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-green-800 dark:text-green-300 font-medium">
                      This event is upcoming
                    </span>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="btn-secondary text-sm"
                >
                  Close
                </button>
                <button className="btn-primary text-sm">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Information */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Notification Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {notifications.filter(n => n.type === 'event').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Events</div>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {notifications.filter(n => n.type === 'competition').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Competitions</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {notifications.filter(n => n.type === 'meeting').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Meetings</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {notifications.filter(n => isUpcoming(n.date)).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Upcoming</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications; 