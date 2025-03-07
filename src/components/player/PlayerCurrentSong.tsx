import type { SongData } from "@/env";
import { usePlayerStore } from "@/store/playerStore";

const PlayerCurrentSong = () => {
  const currentSong = usePlayerStore((state) => state.currentSong as SongData);
  return (
    <div className="h-full flex w-full gap-x-4 overflow-hidden">
      <div className="h-full hidden xs:block shrink-0 aspect-square rounded-md overflow-hidden">
        <img
          className="h-full object-cover aspect-square"
          src={currentSong.cover}
          alt={`Portada de ${currentSong.title}`}
        />
      </div>
      <div className="h-full grow shrink overflow-hidden flex flex-col justify-end min-w-0">
        <a
          className="text-white hover:underline line-clamp-1 md:line-clamp-none overflow-x-hidden md:whitespace-nowrap md:truncate min-w-0"
          href={`/songs/${currentSong.id}`}
        >
          {`${currentSong.title}`}
        </a>
        <div className="text-sm truncate">
          {currentSong.categoryList
            .map((cat) => cat[0].toUpperCase().concat(cat.slice(1)))
            .join(", ")}
        </div>
      </div>
    </div>
  );
};
export default PlayerCurrentSong;
