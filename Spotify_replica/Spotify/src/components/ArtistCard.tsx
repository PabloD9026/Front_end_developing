// src/components/ArtistCard.tsx
import React from 'react';
import styles from '../styles/ArtistCard.module.css';
import type { Artist } from '../data';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className={styles.artistCard}>
      <img src={artist.image} alt={artist.name} className={styles.artistImage} />
      <h3 className={styles.artistName}>{artist.name}</h3>
      <p className={styles.artistType}>Artist</p>
    </div>
  );
};

export default ArtistCard;