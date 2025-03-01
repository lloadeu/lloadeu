import type { Song } from "@/lib/data";
import { getSongCategories } from "@/lib/utilsMedia";
import { usePlayerStore } from "@/store/playerStore";

const PlayerCurrentSong = () => {
  const currentSong = usePlayerStore((state) => state.currentSong) as Song;
  return (
    <>
      <div className="h-full bg-blue-400 rounded-md overflow-hidden">
        <img
          className="h-full object-cover aspect-square"
          src={currentSong.image}
          alt={`Portada de ${currentSong.title}`}
        />
      </div>
      <div className="pt-2 truncate">
        <div className="text-white truncate">{currentSong.title}</div>
        <div className="text-sm truncate">
          {getSongCategories(currentSong)
            .map(({ title }) => title)
            .join(", ")}
        </div>
      </div>
    </>
  );
};
export default PlayerCurrentSong;
