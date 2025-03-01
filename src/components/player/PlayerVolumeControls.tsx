import PlayerVolumeIcon from "@/components/player/PlayerVolumeIcon";
import { Slider } from "@/components/ui/slider";
import { usePlayerStore } from "@/store/playerStore";

const PlayerVolumeControls = () => {
  const { volume, setVolume, toggleMute } = usePlayerStore((state) => state);

  const handleSeekVolume = (val: number) => {
    if (val < 0 || val > 1) return;
    setVolume(val);
  };

  return (
    <>
      <button
        className="p-2 cursor-pointer text-white hover:text-text-dark transition duration-200"
        onClick={toggleMute}
      >
        <PlayerVolumeIcon />
      </button>
      <Slider
        className="max-w-40"
        value={[volume]}
        max={1}
        min={0}
        step={0.01}
        onValueChange={([value]: number[]) => {
          setVolume(value);
        }}
      />
    </>
  );
};
export default PlayerVolumeControls;
