import {
  VolumeFull,
  VolumeLow,
  VolumeMedium,
  VolumeSilenced,
} from "@/icons/VolumeIcons";
import { usePlayerStore } from "@/store/playerStore";

const isVolumeSilenced = (loud: number) => loud === 0;
const isVolumeLow = (loud: number) => loud > 0 && loud < 0.4;
const isVolumeMedium = (loud: number) => loud >= 0.4 && loud < 0.8;
const isVolumeFull = (loud: number) => loud >= 0.8;

const getVolumeIconByLouder = (loud: number) => {
  return (
    <>
      {isVolumeSilenced(loud) && <VolumeSilenced />}
      {isVolumeLow(loud) && <VolumeLow />}
      {isVolumeMedium(loud) && <VolumeMedium />}
      {isVolumeFull(loud) && <VolumeFull />}
    </>
  );
};

const PlayerVolumeIcon = () => {
  const volume = usePlayerStore((state) => state.volume);

  return getVolumeIconByLouder(volume);
};
export default PlayerVolumeIcon;
