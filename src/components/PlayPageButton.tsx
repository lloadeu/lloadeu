import type { CategoryData, SongData } from "@/env";
import { Pause, Play } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";
import type React from "react";

const style: Record<"big" | "small", string> = {
  big: "size-14 bottom-4 right-4",
  small: "size-8 lg:size-10 inset-y-0 right-2 my-auto",
};
const styleTranslate = {
  big: "translate-4",
  small: "translate-x-4",
};

const PlayPageButton = ({
  size = "big",
  media,
  playlistMedia,
}: {
  size?: "big" | "small";
  media: CategoryData | SongData;
  playlistMedia?: SongData[];
}) => {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const mediaId = usePlayerStore((state) => state.mediaId);
  const playlist = usePlayerStore((state) => state.playlist);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  const setMediaId = usePlayerStore((state) => state.setMediaId);
  const setPlaylist = usePlayerStore((state) => state.setPlaylist);
  const clearPlaylist = usePlayerStore((state) => state.clearPlaylist);
  const setPlaylistIndex = usePlayerStore((state) => state.setPlaylistIndex);
  const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);

  const isCurrentMediaPlaying = isPlaying && mediaId === media.id;

  const handlePlay = () => {
    if (media.type === "song") {
      playlist && clearPlaylist();
      setCurrentSong(media as SongData);
    } else if (media.type === "category") {
      if (!playlistMedia || playlistMedia.length === 0) return;
      setPlaylist(playlistMedia);
      setPlaylistIndex(0);
      setCurrentSong(playlistMedia[0]);
    }
    setMediaId(media.id);
    setIsPlaying(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (mediaId === media.id) {
      setIsPlaying(!isPlaying);
    } else {
      handlePlay();
    }
  };

  return (
    <button
      className={`
        grid place-content-center size-16 my-8
        bg-play-card rounded-full cursor-pointer hover:bg-play-card-hover/90 hover:scale-105 transition duration-300 
      `}
      onClick={handleClick}
    >
      {isCurrentMediaPlaying ? (
        <Pause className={`text-black size-6`} />
      ) : (
        <Play className={`text-black size-6`} />
      )}
    </button>
  );
};
export default PlayPageButton;
