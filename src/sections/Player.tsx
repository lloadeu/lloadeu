import PlayerControls from "@/components/player/PlayerControls";
import PlayerCurrentSong from "@/components/player/PlayerCurrentSong";
import PlayerVolumeControls from "@/components/player/PlayerVolumeControls";
import { usePlayerStore } from "@/store/playerStore";

const Player = () => {
  const currentSong = usePlayerStore((state) => state.currentSong);

  return (
    <div className="flex flex-row-reverse md:flex-row h-full gap-x-4 md:gap-x-18 items-center p-4 relative">
      <div className="h-full shrink basis-3/4 md:basis-1/4 md:shrink-0 flex items-center gap-x-4">
        {currentSong && <PlayerCurrentSong />}
      </div>

      <div className="basis-0 shrink grow md:basis-1/2 flex flex-col items-start md:items-center justify-center">
        <PlayerControls />
      </div>

      <div className="text-3xl gap-2 md:basis-1/4 shrink-0 hidden md:flex items-center justify-end">
        <PlayerVolumeControls />
      </div>
    </div>
  );
};
export default Player;
