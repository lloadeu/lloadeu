import { Pause, Play } from "@/icons/PlayerIcons";
import Songs from "@/icons/Songs.astro";
import { categories, songs, type Category, type Song } from "@/lib/data";
import { getCategorySongs } from "@/lib/utilsMedia";
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

const PlayCardButton = ({
  size = "big",
  media,
}: {
  size?: "big" | "small";
  media: Song | Category;
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
      setCurrentSong(media as Song);
    } else if (media.type === "category") {
      const categorySongs = getCategorySongs(media.id);
      if (categorySongs.length === 0) return;
      setPlaylist(categorySongs);
      setPlaylistIndex(0);
      setCurrentSong(categorySongs[0]);
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
      className={`absolute grid place-content-center 
        ${!isCurrentMediaPlaying && "opacity-0 scale-50"}
        ${!isCurrentMediaPlaying && styleTranslate[size]} 
        bg-play-card rounded-full cursor-pointer group-hover:opacity-100 group-hover:scale-100 group-hover:translate-0 hover:bg-play-card-hover/90 hover:scale-105 transition duration-300 
        ${style[size]}`}
      onClick={handleClick}
    >
      {isCurrentMediaPlaying ? (
        <Pause
          className={`text-black ${
            size === "small" ? "size-2 lg:size-4" : "size-6"
          }`}
        />
      ) : (
        <Play
          className={`text-black ${
            size === "small" ? "size-2 lg:size-4" : "size-6"
          }`}
        />
      )}
    </button>
  );
};
export default PlayCardButton;
