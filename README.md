# Vercel Link
https://school-management-frontend-nine.vercel.app/

# School Management System Dashboard

A responsive React-based dashboard for a School Management System with modern UI design, dark mode support, and mobile-friendly interface.

## 🚀 Features

### 📘 Student Dashboard Features
- **Syllabus Management**: Download subject-wise syllabus files (Math, English, Science, Hindi, Sanskrit)
- **Exam Results**: View detailed results for Midterm and Final Term exams with subject-wise analysis
- **Fee Management**: Track monthly fee payments with status indicators (Submitted/Pending)
- **Notifications**: Stay updated with school events, competitions, and announcements

### 🎨 UI/UX Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Modern Interface**: Clean, intuitive design with Tailwind CSS
- **Interactive Elements**: Hover effects, smooth transitions, and user-friendly navigation

### ⚙️ Technical Features
- **React Router**: Client-side routing between different pages
- **Context API**: Global state management for theme switching
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Component Architecture**: Modular, reusable components

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Styling**: Tailwind CSS 3.3.0
- **Build Tool**: Create React App
- **Icons**: Heroicons (SVG)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🏗️ Project Structure

```
school-management/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout.js          # Main layout with sidebar and topbar
│   │   ├── Sidebar.js         # Navigation sidebar
│   │   └── Topbar.js          # Top navigation bar
│   ├── contexts/
│   │   └── ThemeContext.js    # Dark/light theme context
│   ├── data/
│   │   └── dummyData.js       # Mock data for the application
│   ├── pages/
│   │   ├── Dashboard.js       # Main dashboard page
│   │   ├── Syllabus.js        # Syllabus management page
│   │   ├── ExamResults.js     # Exam results page
│   │   ├── Fees.js           # Fee management page
│   │   └── Notifications.js   # Notifications page
│   ├── App.js                 # Main application component
│   ├── index.js              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Pages Overview

### 📊 Dashboard
- Welcome section with student information
- Quick stats cards (exam grade, fees status, notifications count)
- Recent notifications preview
- Quick action buttons for navigation

### 📚 Syllabus
- Subject-wise syllabus cards
- Download functionality for PDF files
- Subject descriptions and information
- Academic year details

### 📈 Exam Results
- Toggle between Midterm and Final Term exams
- Overall performance metrics
- Detailed subject-wise results table
- Performance analysis and grade distribution

### 💰 Fees
- Monthly fee tracking with status indicators
- Payment summary cards
- Filterable fee table
- Payment methods information

### 📢 Notifications
- Event and announcement listings
- Filter by notification type
- Detailed modal view for each notification
- Upcoming events highlighting

## 🎨 Customization

### Theme Configuration
The application uses Tailwind CSS with a custom color palette. You can modify the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... other shades
        900: '#1e3a8a',
      },
    },
  },
},
```

### Adding New Features
1. Create new components in the `src/components/` directory
2. Add new pages in the `src/pages/` directory
3. Update routing in `src/App.js`
4. Add navigation links in `src/components/Sidebar.js`

## 📱 Responsive Design

The application is fully responsive and includes:
- **Mobile-first approach**: Optimized for mobile devices
- **Breakpoint system**: Tailwind's responsive utilities
- **Touch-friendly**: Large touch targets for mobile users
- **Collapsible sidebar**: Mobile-friendly navigation

## 🌙 Dark Mode

Dark mode is implemented using:
- **CSS Classes**: Tailwind's dark mode utilities
- **Context API**: Global state management
- **Local Storage**: Persists user preference
- **Smooth Transitions**: Animated theme switching

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set build command: `npm run build`
4. Set publish directory: `build`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using React and Tailwind CSS** 
