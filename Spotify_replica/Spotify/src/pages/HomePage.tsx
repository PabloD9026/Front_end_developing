// src/pages/HomePage.tsx
import React, { useState } from 'react'; // Removed useEffect import
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Player from '../components/Player';
import styles from '../styles/HomePage.module.css';
import { trendingSongs, popularAlbumsAndSingles, type Song } from '../data';

// Combine all songs into a single list for player navigation
const allPlayableSongs: Song[] = [...trendingSongs, ...popularAlbumsAndSingles];

const HomePage: React.FC = () => {
  // State to hold the index of the currently playing song in allPlayableSongs
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  // Derive the current song object from the index
  const currentPlayingSong = allPlayableSongs[currentSongIndex] || null;

  // Function to handle selecting a song from a card
  const handleSongSelect = (song: Song) => {
    const index = allPlayableSongs.findIndex(s => s.id === song.id);
    if (index !== -1) {
      setCurrentSongIndex(index);
    }
  };

  // Function to play the next song
  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % allPlayableSongs.length;
      return nextIndex;
    });
  };

  // Function to play the previous song
  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => {
      // Ensure the index wraps around correctly for previous
      const prevIndexCalculated = (prevIndex - 1 + allPlayableSongs.length) % allPlayableSongs.length;
      return prevIndexCalculated;
    });
  };

  return (
    <div className={styles.homePage}>
      <Sidebar />
      <div className={styles.mainSection}>
        <Header />
        <MainContent onSongSelect={handleSongSelect} />
      </div>
      <Player
        currentSong={currentPlayingSong}
        onPlayNext={playNextSong}
        onPlayPrevious={playPreviousSong}
      />
    </div>
  );
};

export default HomePage;