// src/components/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftNav}>
        <button className={styles.navButton}>
          {/* Back Arrow SVG */}
          <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M16.952 2.907a.75.75 0 0 1 .023 1.06L9.46 12l7.515 8.033a.75.75 0 1 1-1.083 1.014L7.87 12.513a.75.75 0 0 1-.023-1.06L15.87 2.907a.75.75 0 0 1 1.082.023Z" fill="currentColor"></path></svg>
        </button>
        <button className={styles.navButton}>
          {/* Forward Arrow SVG */}
          <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M7.048 2.907a.75.75 0 0 0-.023 1.06L14.54 12l-7.515 8.033a.75.75 0 1 0 1.083 1.014L16.13 12.513a.75.75 0 0 0 .023-1.06L8.13 2.907a.75.75 0 0 0-1.082-.023Z" fill="currentColor"></path></svg>
        </button>
      </div>

      <div className={styles.searchBar}>
        {/* Search Icon SVG */}
        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M10.5 1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1.5 10.5a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM16.5 16.5l4.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
        <input type="text" placeholder="What do you want to play?" />
      </div>

      <div className={styles.rightNav}>
        <a href="/premium" className={styles.navLink}>Premium</a>
        <a href="/support" className={styles.navLink}>Support</a>
        <a href="/download" className={styles.navLink}>Download</a>
        <span className={styles.separator}>|</span>
        <button className={styles.installAppButton}>
          {/* Install App Icon SVG */}
          <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M1.5 1.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM1.5 5.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM1.5 9.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM1.5 13.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Z" fill="currentColor"></path></svg>
          Install App
        </button>
        <a href="/signup" className={styles.navLink}>Sign up</a>
        <button className={styles.loginButton}>Log in</button>
      </div>
    </header>
  );
};

export default Header;