// src/components/MainContent.tsx
import React from 'react';
import styles from '../styles/MainContent.module.css';
import SongCard from './SongCard';
import ArtistCard from './ArtistCard';
import { trendingSongs, popularArtists, popularAlbumsAndSingles, type Song } from '../data';

interface MainContentProps {
  onSongSelect: (song: Song) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onSongSelect }) => {
  return (
    <div className={styles.mainContent}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Trending songs</h2>
          <a href="/trending" className={styles.showAll}>Show all</a>
        </div>
        <div className={styles.grid}>
          {trendingSongs.map((song) => (
            <SongCard key={song.id} song={song} onSongClick={onSongSelect} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Popular artists</h2>
          <a href="/artists" className={styles.showAll}>Show all</a>
        </div>
        <div className={styles.grid}>
          {popularArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Popular albums and singles</h2>
          <a href="/albums" className={styles.showAll}>Show all</a>
        </div>
        <div className={styles.grid}>
          {popularAlbumsAndSingles.map((song) => (
            <SongCard key={song.id} song={song} onSongClick={onSongSelect} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;