import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Syllabus from './pages/Syllabus';
import ExamResults from './pages/ExamResults';
import Fees from './pages/Fees';
import Notifications from './pages/Notifications';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/exam-results" element={<ExamResults />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 