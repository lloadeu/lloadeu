import type { Category, Song } from "@/lib/data";
import { create } from "zustand";

export interface PlayerStore {
  isPlaying: boolean;
  mediaId: string | null;
  playlist: Song[] | null;
  playlistIndex: number;
  currentSong: Song | null;
  duration: number;
  currentTime: number;
  volume: number;
  prevVolume: number;
  hasPrevSong: () => boolean;
  hasNextSong: () => boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setMediaId: (mediaId: string | null) => void;
  setPlaylist: (playlist: Song[]) => void;
  clearPlaylist: () => void;
  setPlaylistIndex: (index: number) => void;
  setCurrentSong: (currentSong: Song | null) => void;
  setDuration: (duration: number) => void;
  setCurrentTime: (currentTime: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setNewPlaylistSong: (newIndex: number) => void;
  handleSongEnd: () => void;
  handleNextSong: () => void;
  handlePrevSong: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  isPlaying: false,
  mediaId: null,
  playlist: null,
  playlistIndex: 0,
  currentSong: null,
  duration: 0,
  currentTime: 0,
  volume: 0.6,
  prevVolume: 0.6,

  setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
  setMediaId: (mediaId) => set({ mediaId }),
  setPlaylist: (playlist) => set({ playlist }),
  clearPlaylist: () => set({ playlist: null }),
  setPlaylistIndex: (index) => set({ playlistIndex: index }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setDuration: (duration) => set({ duration }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setVolume: (volume) => set({ volume }),

  toggleMute: () => {
    const { volume, prevVolume } = get();
    if (volume === 0) {
      set({ volume: prevVolume });
    } else {
      set({ volume: 0, prevVolume: volume });
    }
  },

  hasPrevSong: () => {
    const { playlist, playlistIndex } = get();
    return Array.isArray(playlist) && playlistIndex > 0;
  },
  hasNextSong: () => {
    const { playlist, playlistIndex } = get();
    return Array.isArray(playlist) && playlist.length - 1 > playlistIndex;
  },

  setNewPlaylistSong: (newIndex) => {
    const { playlist } = get();
    if (playlist) {
      set({
        playlistIndex: newIndex,
        currentSong: playlist[newIndex],
      });
    }
  },

  handleSongEnd: () => {
    const { playlistIndex, setNewPlaylistSong, hasNextSong } = get();
    if (hasNextSong()) {
      const newIndex = playlistIndex + 1;
      setNewPlaylistSong(newIndex);
    } else {
      set({
        mediaId: null,
        playlist: null,
        playlistIndex: 0,
        currentSong: null,
        currentTime: 0,
        duration: 0,
        isPlaying: false,
      });
    }
  },

  handleNextSong: () => {
    const { playlistIndex, setNewPlaylistSong, hasNextSong } = get();
    if (hasNextSong()) {
      const newIndex = playlistIndex + 1;
      setNewPlaylistSong(newIndex);
    }
  },

  handlePrevSong: () => {
    const { playlistIndex, setNewPlaylistSong, hasPrevSong } = get();
    if (hasPrevSong()) {
      const newIndex = playlistIndex - 1;
      setNewPlaylistSong(newIndex);
    }
  },
}));
