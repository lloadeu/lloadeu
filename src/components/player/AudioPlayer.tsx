import useAudioPlayer from "@/hooks/useAudioPlayer";
import type React from "react";

const AudioPlayer = ({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) => {
  const { handleOnSongEnded, handleSetDuration } = useAudioPlayer(audioRef);
  return (
    <audio
      ref={audioRef}
      onEnded={handleOnSongEnded}
      onLoadedMetadata={handleSetDuration}
    />
  );
};
export default AudioPlayer;
