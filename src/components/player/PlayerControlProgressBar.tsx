import { Slider } from "@/components/ui/slider";
import useDebounce from "@/hooks/useDebounce";
import { formatTime } from "@/lib/utils";
import { usePlayerStore } from "@/store/playerStore";

const PlayerControlProgressBar = ({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) => {
  const { currentSong, currentTime, duration, setCurrentTime } = usePlayerStore(
    (state) => state
  );

  const debouncedOnValueChange = useDebounce((value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  }, 50);

  const handleSliderChange = (value: number[]) => {
    setCurrentTime(value[0]);
    debouncedOnValueChange(value[0]);
  };

  return (
    <>
      <Slider
        className="pb-2 pt-3 transition duration-500"
        value={[currentTime]}
        disabled={!currentSong}
        max={currentSong ? duration : 1}
        onValueChange={handleSliderChange}
      />
      <div className="flex w-full justify-between text-sm">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </>
  );
};
export default PlayerControlProgressBar;
