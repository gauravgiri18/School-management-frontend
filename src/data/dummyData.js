// Dummy data for the School Management System

export const subjects = [
  {
    id: 1,
    name: 'Mathematics',
    syllabusUrl: 'https://example.com/syllabus/math.pdf',
    description: 'Advanced mathematics including algebra, geometry, and calculus'
  },
  {
    id: 2,
    name: 'English',
    syllabusUrl: 'https://example.com/syllabus/english.pdf',
    description: 'English literature, grammar, and composition'
  },
  {
    id: 3,
    name: 'Science',
    syllabusUrl: 'https://example.com/syllabus/science.pdf',
    description: 'Physics, Chemistry, and Biology fundamentals'
  },
  {
    id: 4,
    name: 'Hindi',
    syllabusUrl: 'https://example.com/syllabus/hindi.pdf',
    description: 'Hindi literature, grammar, and writing skills'
  },
  {
    id: 5,
    name: 'Sanskrit',
    syllabusUrl: 'https://example.com/syllabus/sanskrit.pdf',
    description: 'Classical Sanskrit language and literature'
  }
];

export const examResults = {
  midterm: {
    examName: 'Midterm Examination',
    examDate: '2024-10-15',
    totalMarks: 500,
    subjects: [
      { name: 'Mathematics', marks: 85, totalMarks: 100 },
      { name: 'English', marks: 78, totalMarks: 100 },
      { name: 'Science', marks: 92, totalMarks: 100 },
      { name: 'Hindi', marks: 88, totalMarks: 100 },
      { name: 'Sanskrit', marks: 90, totalMarks: 100 }
    ]
  },
  final: {
    examName: 'Final Term Examination',
    examDate: '2024-12-20',
    totalMarks: 500,
    subjects: [
      { name: 'Mathematics', marks: 88, totalMarks: 100 },
      { name: 'English', marks: 82, totalMarks: 100 },
      { name: 'Science', marks: 95, totalMarks: 100 },
      { name: 'Hindi', marks: 85, totalMarks: 100 },
      { name: 'Sanskrit', marks: 92, totalMarks: 100 }
    ]
  }
};

export const feesData = [
  { month: 'April 2024', amount: 5000, status: 'Submitted', dueDate: '2024-04-05' },
  { month: 'May 2024', amount: 5000, status: 'Submitted', dueDate: '2024-05-05' },
  { month: 'June 2024', amount: 5000, status: 'Submitted', dueDate: '2024-06-05' },
  { month: 'July 2024', amount: 5000, status: 'Submitted', dueDate: '2024-07-05' },
  { month: 'August 2024', amount: 5000, status: 'Submitted', dueDate: '2024-08-05' },
  { month: 'September 2024', amount: 5000, status: 'Submitted', dueDate: '2024-09-05' },
  { month: 'October 2024', amount: 5000, status: 'Submitted', dueDate: '2024-10-05' },
  { month: 'November 2024', amount: 5000, status: 'Pending', dueDate: '2024-11-05' },
  { month: 'December 2024', amount: 5000, status: 'Pending', dueDate: '2024-12-05' },
  { month: 'January 2025', amount: 5000, status: 'Pending', dueDate: '2025-01-05' },
  { month: 'February 2025', amount: 5000, status: 'Pending', dueDate: '2025-02-05' },
  { month: 'March 2025', amount: 5000, status: 'Pending', dueDate: '2025-03-05' }
];

export const notifications = [
  {
    id: 1,
    title: 'Sports Day Celebration',
    description: 'Annual sports day will be held on December 15th, 2024. All students are encouraged to participate in various sports activities.',
    date: '2024-12-15',
    type: 'event'
  },
  {
    id: 2,
    title: 'Quiz Competition',
    description: 'Inter-house quiz competition will be organized on November 20th, 2024. Registration deadline is November 15th.',
    date: '2024-11-20',
    type: 'competition'
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    description: 'Quarterly parent-teacher meeting is scheduled for October 25th, 2024. Please ensure your parents attend.',
    date: '2024-10-25',
    type: 'meeting'
  },
  {
    id: 4,
    title: 'Annual Day Function',
    description: 'School annual day function will be celebrated on January 20th, 2025. Cultural programs and prize distribution will be held.',
    date: '2025-01-20',
    type: 'event'
  },
  {
    id: 5,
    title: 'Science Exhibition',
    description: 'Annual science exhibition will be held on December 10th, 2024. Students can showcase their science projects.',
    date: '2024-12-10',
    type: 'exhibition'
  }
];

export const studentInfo = {
  name: 'Rahul Sharma',
  rollNumber: 'STU2024001',
  class: 'Class 10',
  section: 'A',
  admissionDate: '2020-04-01',
  parentName: 'Mr. Rajesh Sharma',
  contactNumber: '+91 98765 43210',
  email: 'rahul.sharma@school.com'
}; 