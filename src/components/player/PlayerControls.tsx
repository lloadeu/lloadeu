import AudioPlayer from "@/components/player/AudioPlayer";
import PlayerControlButtons from "@/components/player/PlayerControlButtons";
import PlayerControlProgressBar from "@/components/player/PlayerControlProgressBar";
import { useRef } from "react";

const PlayerControls = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <PlayerControlButtons />
      </div>

      <div className="absolute -top-5 left-0 flex flex-col items-center w-full md:relative md:top-0">
        <PlayerControlProgressBar audioRef={audioRef} />
      </div>

      <div>
        <AudioPlayer audioRef={audioRef} />
      </div>
    </>
  );
};
export default PlayerControls;
