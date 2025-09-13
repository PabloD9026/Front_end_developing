import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
import './styles/App.css'; // Your global styles
import './styles/marketplace.css'; // Make sure to import your marketplace specific styles

// Import your page components
import LoginPage from './pages/LoginPage.tsx';
import MarketplacePage from './pages/MarketplacePage.tsx';

const App: React.FC = () => {
  return (
    <Router> {/* Wrap your entire app with BrowserRouter */}
      <Routes> {/* Define your routes */}
        <Route path="/" element={<LoginPage />} /> {/* Route for the login page */}
        <Route path="/marketplace" element={<MarketplacePage />} /> Route for the marketplace page
        {/* Add more routes here if you have other pages */}
      </Routes>
    </Router>
  );
};

export default App;