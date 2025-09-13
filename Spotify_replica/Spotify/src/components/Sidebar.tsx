// src/components/Sidebar.tsx
import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {/* Spotify Logo SVG */}
        <svg width="130" height="40" viewBox="0 0 167 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M83.5 0C37.3 0 0 3.58 0 8C0 12.42 37.3 16 83.5 16C129.7 16 167 12.42 167 8C167 3.58 129.7 0 83.5 0ZM83.5 24C37.3 24 0 27.58 0 32C0 36.42 37.3 40 83.5 40C129.7 40 167 36.42 167 32C167 27.58 129.7 24 83.5 24Z" fill="#1DB954"/>
          <path d="M83.5 12C40.7 12 5.5 15.58 5.5 20C5.5 24.42 40.7 28 83.5 28C126.3 28 161.5 24.42 161.5 20C161.5 15.58 126.3 12 83.5 12Z" fill="#1DB954"/>
        </svg>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="/">
              {/* Home Icon SVG */}
              <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M12 3.832a.75.75 0 0 0-1.06 0L3.195 9.772a.75.75 0 0 0 .996 1.128l.073-.065 7.236-6.418 7.236 6.418.073.065a.75.75 0 0 0 .996-1.128L12 3.832Z" fill="currentColor"></path><path d="M11.25 4.832a.75.75 0 0 1 1.5 0v.668H19.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h6.75V4.832Z" fill="currentColor"></path><path d="M12 6.25a.75.75 0 0 0-.75.75v5.25H6.75a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75v-6.75a.75.75 0 0 0-.75-.75H12.75V7a.75.75 0 0 0-.75-.75Z" fill="currentColor"></path></svg>
              Home
            </a>
          </li>
          <li>
            <a href="/search">
              {/* Search Icon SVG */}
              <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M10.5 1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1.5 10.5a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM16.5 16.5l4.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
              Search
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.librarySection}>
        <div className={styles.libraryHeader}>
          <button className={styles.libraryButton}>
            {/* Library Icon SVG */}
            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1ZM15.5 2.134A1 1 0 0 0 14 3.002v18a1 1 0 0 0 2 0V3.002a1 1 0 0 0-.5-1.868ZM7 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1Z" fill="currentColor"></path></svg>
            Your Library
          </button>
          <button className={styles.plusButton}>
            {/* Plus Icon SVG */}
            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M12 2.75a.75.75 0 0 0-1.5 0v8.5H2.75a.75.75 0 0 0 0 1.5h8.5v8.5a.75.75 0 0 0 1.5 0v-8.5h8.5a.75.75 0 0 0 0-1.5h-8.5v-8.5Z" fill="currentColor"></path></svg>
          </button>
        </div>

        <div className={styles.card}>
          <h3>Create your first playlist</h3>
          <p>It's easy, we'll help you</p>
          <button className={styles.createPlaylistButton}>Create playlist</button>
        </div>

        <div className={styles.card}>
          <h3>Let's find some podcasts to follow</h3>
          <p>We'll keep you updated on new episodes</p>
          <button className={styles.browsePodcastsButton}>Browse podcasts</button>
        </div>
      </div>

      <div className={styles.footer}>
        <ul>
          <li><a href="/legal">Legal</a></li>
          <li><a href="/safety-privacy">Safety & Privacy Center</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookies</a></li>
          <li><a href="/about-ads">About Ads</a></li>
          <li><a href="/accessibility">Accessibility</a></li>
        </ul>
        <button className={styles.languageButton}>
          {/* Globe Icon SVG */}
          <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM.75 8a7.25 7.25 0 1 1 14.5 0A7.25 7.25 0 0 1 .75 8ZM7.25 1.75v12.5a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0ZM1.75 8a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z" fill="currentColor"></path></svg>
          English
        </button>
      </div>
    </div>
  );
};

export default Sidebar;