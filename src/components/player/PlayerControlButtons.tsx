import { Next, Pause, Play, Prev } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

const PlayerControlButtons = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    hasPrevSong,
    hasNextSong,
    handleNextSong,
    handlePrevSong,
  } = usePlayerStore((state) => state);

  const toggleIsPlaying = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <button
        className={`rounded-full p-2 bg-white text-black transition duration-500
          ${
            hasPrevSong()
              ? "cursor-pointer opacity-100"
              : "cursor-auto opacity-20"
          }
          `}
        onClick={handlePrevSong}
      >
        {<Prev />}
      </button>
      <button
        className={`bg-white p-3 rounded-full text-black transition duration-500
            ${
              currentSong
                ? "cursor-pointer opacity-100"
                : "cursor-auto opacity-20"
            }
          `}
        onClick={toggleIsPlaying}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        className={`rounded-full p-2 bg-white text-black transition duration-500
          ${
            hasNextSong()
              ? "cursor-pointer opacity-100"
              : "cursor-auto opacity-20"
          }
          `}
        onClick={handleNextSong}
      >
        {<Next />}
      </button>
    </>
  );
};
export default PlayerControlButtons;
