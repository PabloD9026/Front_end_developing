// src/components/Player.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/Player.module.css';
import type { Song } from '../data';

interface PlayerProps {
  currentSong: Song | null;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
}

const Player: React.FC<PlayerProps> = ({ currentSong, onPlayNext, onPlayPrevious }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Effect to load and potentially play a new song when currentSong changes
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = `/audiofiles/${currentSong.audioFile}`;
      console.log("Attempting to load audio from:", audioRef.current.src);
      audioRef.current.load(); // Load the new audio

      // If a song was playing, try to play the new one.
      // Browsers might block autoplay, so we handle the promise.
      if (isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true); // Confirm playing state if successful
          console.log("Audio started playing automatically (new song).");
        }).catch(e => {
          console.warn("Autoplay prevented for new song:", e);
          setIsPlaying(false); // Ensure UI reflects paused state if autoplay fails
        });
      } else {
        setIsPlaying(false); // If it was paused, keep it paused
      }

      setCurrentTime(0); // Reset time for new song
      setDuration(0); // Reset duration until metadata is loaded
    } else if (audioRef.current && !currentSong) {
      // If no song is selected, pause and clear the audio source
      audioRef.current.pause();
      audioRef.current.src = '';
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentSong]); // Re-run this effect only when currentSong changes

  // Set initial volume when audio element is first available
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle play/pause toggle
  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false); // Explicitly set to false on pause
        console.log("Audio paused by user.");
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true); // Set to true only if play succeeds
          console.log("Audio started playing by user interaction.");
        }).catch(e => {
          console.error("Error playing audio:", e);
          setIsPlaying(false); // Ensure it's false if play fails
        });
      }
    }
  }, [isPlaying]); // isPlaying is a dependency because we read its value

  // Handle volume change
  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }, []);

  // Handle seeking (timeline click/drag)
  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  }, []);

  // Update current time as song plays
  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  // Set duration when metadata is loaded
  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      console.log("Metadata loaded for:", currentSong?.title, "Duration:", audioRef.current.duration);
      // If a song is loaded and we want it to play, try to play it here
      if (isPlaying) { // Only attempt to play if isPlaying was true before metadata loaded
        audioRef.current.play().then(() => {
          setIsPlaying(true); // Confirm playing state
        }).catch(e => console.warn("Autoplay prevented after metadata load:", e));
      }
    }
  }, [currentSong, isPlaying]); // Added isPlaying to dependencies

  // Handle song ending - automatically play next song
  const handleSongEnded = useCallback(() => {
    console.log("Song ended. Playing next.");
    setIsPlaying(false); // Pause initially
    setCurrentTime(0);
    onPlayNext(); // Play the next song
  }, [onPlayNext]);

  // Attach and detach event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleSongEnded);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleSongEnded);
      };
    }
  }, [handleTimeUpdate, handleLoadedMetadata, handleSongEnded]);

  // Format time for display
  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!currentSong) {
    return (
      <div className={styles.playerContainer}>
        <audio ref={audioRef} />
        <div className={styles.noSongPlaying}>No song selected</div>
      </div>
    );
  }

  return (
    <div className={styles.playerContainer}>
      <audio ref={audioRef} />

      <div className={styles.songInfo}>
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className={`${styles.albumCover} ${isPlaying ? styles.spinning : ''}`}
        />
        <div className={styles.textInfo}>
          <span className={styles.songTitle}>{currentSong.title}</span>
          <span className={styles.artistName}>{currentSong.artist}</span>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.playbackButtons}>
          <button onClick={onPlayPrevious} className={styles.controlButton} aria-label="Previous song">
            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 1a.7.7 0 0 1 .7.7v6.6l7.3-4.7a.7.7 0 0 1 1.2.6v9.4a.7.7 0 0 1-1.2.6L4 7.7v6.6a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
          </button>
          <button onClick={togglePlayPause} className={styles.playPauseButton} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              // Pause Icon
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
            ) : (
              // Play Icon
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.214L4.05 14.894a.7.7 0 0 1-1.05-.607V1.713z"></path></svg>
            )}
          </button>
          <button onClick={onPlayNext} className={styles.controlButton} aria-label="Next song">
            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 1a.7.7 0 0 0-.7.7v6.6L4.7 3a.7.7 0 0 0-1.2.6v9.4a.7.7 0 0 0 1.2.6l7.3-4.7v6.6a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
          </button>
        </div>
        <div className={styles.timeline}>
          <span className={styles.time}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className={styles.progressBar}
            style={{ backgroundSize: `${(currentTime / (duration || 1)) * 100}% 100%` }}
            aria-label="Seek song"
          />
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>
      </div>

      <div className={styles.volumeControl}>
        <button className={styles.controlButton} aria-label="Volume">
          <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M9.75 1.375c0-.17-.1-.3-.25-.375L5.25 3.5H2.75c-.414 0-.75.336-.75.75v7.5c0 .414.336.75.75.75h2.5L9.5 14.625c.15.075.25-.005.25-.175V1.375zM11.5 8a3.5 3.5 0 0 1-1.73 3.01l.866.5A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.864-3.51l-.866.5A3.5 3.5 0 0 1 11.5 8z"></path></svg>
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeBar}
          style={{ backgroundSize: `${volume * 100}% 100%` }}
          aria-label="Volume control"
        />
      </div>
    </div>
  );
};

export default Player;