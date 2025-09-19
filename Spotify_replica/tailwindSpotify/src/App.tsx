// src/App.tsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// The styles from App.module.css are now applied via Tailwind classes.
// Global styles for `body` and `code` are typically handled in your global CSS file (e.g., index.css)
// or by applying classes to the body in your main HTML file.
// For the purpose of this conversion, we'll apply the core styles to the main div.

function App() {
  return (
    <Router>
      {/*
        - `flex`: Replaces `display: flex`
        - `h-screen`: Replaces `height: 100vh`
        - `overflow-hidden`: Replaces `overflow: hidden`
        - `bg-[#121212]`: Replaces `background-color: #121212`
        - `text-white`: Replaces `color: #ffffff`
        - `font-sans`: Applies a default sans-serif font stack similar to the original
        - `antialiased`: Applies font smoothing
      */}
      <div className="h-screen overflow-hidden bg-[#121212] font-sans text-white antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;