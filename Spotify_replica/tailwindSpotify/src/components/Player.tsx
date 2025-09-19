// src/components/Player.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = `/audiofiles/${currentSong.audioFile}`;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.warn("Autoplay prevented for new song:", e);
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(false);
      }
      setCurrentTime(0);
      setDuration(0);
    } else if (audioRef.current && !currentSong) {
      audioRef.current.pause();
      audioRef.current.src = '';
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(e => {
          console.error("Error playing audio:", e);
          setIsPlaying(false);
        });
      }
    }
  }, [isPlaying]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      if (isPlaying) {
        audioRef.current.play().catch(e => console.warn("Autoplay prevented after metadata load:", e));
      }
    }
  }, [isPlaying]);

  const handleSongEnded = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    onPlayNext();
  }, [onPlayNext]);

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

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const rangeInputClasses = "h-1 appearance-none rounded-sm outline-none cursor-pointer bg-[#404040] bg-no-repeat bg-gradient-to-r from-[#1DB954] to-[#1DB954] [&::-webkit-slider-thumb]:hidden hover:[&::-webkit-slider-thumb]:block [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_2px_rgba(0,0,0,0.5)] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-[0_0_2px_rgba(0,0,0,0.5)]";

  if (!currentSong) {
    return (
      <div className="fixed bottom-0 left-0 z-[1000] box-border flex h-[90px] w-full items-center justify-between border-t border-black bg-[#181818] px-4">
        <audio ref={audioRef} />
        <div className="w-full text-center text-sm text-[#b3b3b3]">No song selected</div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 z-[1000] box-border flex h-[90px] w-full items-center justify-between border-t border-black bg-[#181818] px-4">
      <audio ref={audioRef} />

      <div className="flex flex-1 items-center gap-3 min-w-0">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className={`h-14 w-14 rounded-full object-cover shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''}`}
        />
        <div className="flex flex-col min-w-0">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold text-white">{currentSong.title}</span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#b3b3b3]">{currentSong.artist}</span>
        </div>
      </div>

      <div className="flex flex-[2] max-w-[720px] flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button onClick={onPlayPrevious} className="flex cursor-pointer items-center justify-center border-none bg-transparent p-2 text-white transition-transform duration-100 ease-in-out hover:scale-110" aria-label="Previous song">
            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 1a.7.7 0 0 1 .7.7v6.6l7.3-4.7a.7.7 0 0 1 1.2.6v9.4a.7.7 0 0 1-1.2.6L4 7.7v6.6a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
          </button>
          <button onClick={togglePlayPause} className="flex cursor-pointer items-center justify-center border-none bg-transparent p-2 text-white transition-transform duration-100 ease-in-out hover:scale-110" aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
            ) : (
              <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.214L4.05 14.894a.7.7 0 0 1-1.05-.607V1.713z"></path></svg>
            )}
          </button>
          <button onClick={onPlayNext} className="flex cursor-pointer items-center justify-center border-none bg-transparent p-2 text-white transition-transform duration-100 ease-in-out hover:scale-110" aria-label="Next song">
            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 1a.7.7 0 0 0-.7.7v6.6L4.7 3a.7.7 0 0 0-1.2.6v9.4a.7.7 0 0 0 1.2.6l7.3-4.7v6.6a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
          </button>
        </div>
        <div className="flex w-full items-center gap-2">
          <span className="w-[30px] text-center text-[11px] text-[#b3b3b3]">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className={`w-full ${rangeInputClasses}`}
            style={{ backgroundSize: `${(currentTime / (duration || 1)) * 100}% 100%` }}
            aria-label="Seek song"
          />
          <span className="w-[30px] text-center text-[11px] text-[#b3b3b3]">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 max-w-[180px]">
        <button className="flex cursor-pointer items-center justify-center border-none bg-transparent p-2 text-white transition-transform duration-100 ease-in-out hover:scale-110" aria-label="Volume">
          <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M9.75 1.375c0-.17-.1-.3-.25-.375L5.25 3.5H2.75c-.414 0-.75.336-.75.75v7.5c0 .414.336.75.75.75h2.5L9.5 14.625c.15.075.25-.005.25-.175V1.375zM11.5 8a3.5 3.5 0 0 1-1.73 3.01l.866.5A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.864-3.51l-.866.5A3.5 3.5 0 0 1 11.5 8z"></path></svg>
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={`w-[100px] ${rangeInputClasses}`}
          style={{ backgroundSize: `${volume * 100}% 100%` }}
          aria-label="Volume control"
        />
      </div>
    </div>
  );
};

export default Player;