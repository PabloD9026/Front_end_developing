// src/components/SongCard.tsx
import React from 'react';
import styles from '../styles/SongCard.module.css';
import type { Song } from '../data'; // Use type-only import

interface SongCardProps {
  song: Song;
  onSongClick: (song: Song) => void; // New prop for click handler
}

const SongCard: React.FC<SongCardProps> = ({ song, onSongClick }) => {
  return (
    <div className={styles.songCard} onClick={() => onSongClick(song)}>
      <div className={styles.coverContainer}>
        <img src={song.cover} alt={song.title} className={styles.coverImage} />
        {/* Play button overlay could go here */}
      </div>
      <h3 className={styles.title}>{song.title}</h3>
      <p className={styles.artist}>{song.artist}</p>
      {song.explicit && <span className={styles.explicitTag}>E</span>}
    </div>
  );
};

export default SongCard;