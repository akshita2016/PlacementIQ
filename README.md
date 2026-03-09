# Placement Helper

Your Complete Placement Preparation Guide - A React-based web application designed to help B.Tech students prepare for placements with structured resources.

## Features

- **DSA Practice Sheet**: Curated problems organized by data structures and algorithms topics
- **Core Subjects**: Essential CS fundamentals (OS, DBMS, Networks, OOP) with interview questions  
- **Resume Guide**: Tips and templates for creating winning placement resumes
- **Interview Questions**: HR, technical, and coding interview preparation
- **Clean UI**: Simple, responsive design focused on content and usability

## Tech Stack

- **React 18** with functional components and hooks
- **React Router** for navigation
- **Vanilla CSS** for styling (no external UI libraries)
- **Vite** for fast development and building

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   └── Card.jsx        # Reusable card component
├── pages/
│   ├── Home.jsx        # Landing page
│   ├── DSA.jsx         # DSA practice sheet
│   ├── Subjects.jsx    # Core CS subjects
│   ├── Resume.jsx      # Resume guide
│   └── Interview.jsx   # Interview questions
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PlacementIQ
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features

### 🎯 Beginner Friendly
- Uses only functional components with basic React hooks
- No complex state management (Redux/Context)
- Clean, easy-to-understand code structure
- Well-commented components

### 📱 Responsive Design
- Mobile-first approach
- Flexbox and CSS Grid layouts
- Clean typography and spacing
- Accessible color scheme

### 🔍 Comprehensive Content
- **500+ DSA Problems** organized by topics
- **200+ Interview Questions** (HR + Technical)
- **50+ Core Concepts** across CS subjects
- **Resume Templates** and formatting tips

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Roadmap

- [ ] Add practice coding environment
- [ ] Include company-specific preparation guides
- [ ] Add mock interview simulator
- [ ] Implement progress tracking
- [ ] Add dark mode theme
- [ ] Include video tutorials

---

Built with ❤️ for B.Tech students preparing for placements
The Personalized Placement Guidance System is a backend-centric application that monitors a student’s coding practice, detects weak areas, tracks consistency, and dynamically generates daily preparation tasks based on performance analytics and target companies.
