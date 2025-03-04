import type { SongData } from "@/env";
import { usePlayerStore } from "@/store/playerStore";

const PlayerCurrentSong = () => {
  const currentSong = usePlayerStore((state) => state.currentSong as SongData);
  return (
    <>
      <div className="h-full bg-blue-400 rounded-md overflow-hidden">
        <img
          className="h-full object-cover aspect-square"
          src={currentSong.cover}
          alt={`Portada de ${currentSong.title}`}
        />
      </div>
      <div className="h-full truncate flex flex-col justify-end">
        <a
          className="text-white truncate hover:underline"
          href={`/songs/${currentSong.id}`}
        >
          {currentSong.title}
        </a>
        <div className="text-sm truncate">
          {currentSong.categoryList.join(", ")}
        </div>
      </div>
    </>
  );
};
export default PlayerCurrentSong;
