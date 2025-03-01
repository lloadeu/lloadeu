import PlayerControls from "@/components/player/PlayerControls";
import PlayerCurrentSong from "@/components/player/PlayerCurrentSong";
import PlayerVolumeControls from "@/components/player/PlayerVolumeControls";
import { usePlayerStore } from "@/store/playerStore";

const Player = () => {
  const currentSong = usePlayerStore((state) => state.currentSong);

  return (
    <div className="flex h-full gap-x-18 items-center p-4">
      <div className="h-full basis-1/4 shrink-0 flex items-center gap-x-4">
        {currentSong && <PlayerCurrentSong />}
      </div>

      <div className="basis-1/2 flex flex-col justify-center items-center">
        <PlayerControls />
      </div>

      <div className="text-3xl gap-2 basis-1/4 shrink-0 flex items-center justify-end">
        <PlayerVolumeControls />
      </div>
    </div>
  );
};
export default Player;
