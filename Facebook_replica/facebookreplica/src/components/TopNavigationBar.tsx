import React from 'react';

const TopNavigationBar: React.FC = () => {
  return (
    <nav className="top-nav-bar">
      <div className="nav-left">
        {/* Placeholder for actual Facebook logo SVG */}
        <img src="https://imgs.search.brave.com/VWCELqB784tQRkZEHCvd_kCDaLsvEFw5IiE0Ifcv0cA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTczMDM0MjMx/Ml9mYWNlYm9vay1s/b2dvLXBuZy5wbmc" alt="Facebook" className="nav-logo" />
        <div className="nav-search-top"> {/* Renamed to distinguish from marketplace search */}
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="nav-center">
        {/* Navigation icons with specific classes for responsive hiding */}
        <div className="nav-icon nav-icon-home">🏠</div> {/* Home */}
        <div className="nav-icon nav-icon-friends">👥</div> {/* Friends */}
        <div className="nav-icon nav-icon-watch">📺</div> {/* Watch */}
        <div className="nav-icon active highlight nav-icon-marketplace">🛍️</div> {/* Marketplace (active) */}
        <div className="nav-icon nav-icon-groups">📚</div> {/* Groups */}
        <div className="nav-icon nav-icon-gaming">🎮</div> {/* Added: Gaming, or similar */}
        <div className="nav-icon nav-icon-events">📅</div> {/* Added: Events, or similar */}
        <div className="nav-icon nav-icon-memories">🕰️</div> {/* Added: Memories, or similar */}
      </div>
      <div className="nav-right">
        {/* Profile, Menu, Messages, Notifications */}
        <div className="nav-icon nav-icon-plus">➕</div> {/* The plus icon */}
        <div className="nav-profile-circle"></div> {/* Profile pic */}
        <div className="nav-icon nav-icon-messages">💬<span className="badge">3</span></div> {/* Messages */}
        <div className="nav-icon nav-icon-notifications">🔔<span className="badge">20+</span></div> {/* Notifications */}
      </div>
    </nav>
  );
};

export default TopNavigationBar;