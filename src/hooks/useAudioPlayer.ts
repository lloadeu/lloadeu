import { formatTime } from "@/lib/utils";
import { usePlayerStore } from "@/store/playerStore";
import React, { useEffect, useRef } from "react";

const useAudioPlayer = (audioRef: React.RefObject<HTMLAudioElement | null>) => {
  const {
    currentSong,
    setCurrentTime,
    isPlaying,
    volume,
    playlist,
    playlistIndex,
    setPlaylistIndex,
    setCurrentSong,
    setMediaId,
    clearPlaylist,
    setDuration,
    setIsPlaying,
    handleSongEnd,
  } = usePlayerStore((state) => state);

  // handles player music track
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.src;
      setCurrentTime(0);
      audioRef.current.play();
      // TODO - audioRef play: check double render when song changes
      console.log("currentSong changed audioref triggers play");
    }
  }, [currentSong]);

  // handles player playing state
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // TODO - audioRef play: check double render when song changes
        console.log("isPlaying changed audioref triggers play");
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // handles player volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // manage currentTime renders
  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        const time = audioRef.current.currentTime;
        setCurrentTime(time);
      }
    };

    // TODO: use native ontimeupdate from audio element instead of interval
    let currentTimeInterval: number;
    if (isPlaying) {
      console.log("timer effect triggers");

      currentTimeInterval = setInterval(() => {
        updateCurrentTime();
      }, 250);
    }

    return () => {
      if (currentTimeInterval) {
        console.log("timmer effect cleared");
        clearInterval(currentTimeInterval);
      }
    };
  }, [isPlaying]);

  // handles player song end
  const handleOnSongEnded = () => {
    handleSongEnd();
  };

  const handleSetDuration = ({
    currentTarget,
  }: {
    currentTarget: EventTarget & HTMLAudioElement;
  }) => {
    const duration = currentTarget.duration;
    setDuration(duration);
  };

  return { handleOnSongEnded, handleSetDuration };
};

export default useAudioPlayer;
