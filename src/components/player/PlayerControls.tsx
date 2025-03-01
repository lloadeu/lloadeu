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

      <div className="flex flex-col items-center w-full">
        <PlayerControlProgressBar audioRef={audioRef} />
      </div>

      <div>
        <AudioPlayer audioRef={audioRef} />
      </div>
    </>
  );
};
export default PlayerControls;
