import { TableCell, TableRow } from "@/components/ui/table";
import type { SongData } from "@/env";
import { Pause, Play } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

interface Props {
  songIndex: number;
  song: SongData & { chords: string | undefined };
  playlistId: string;
  handleSetPlaylist: () => void;
}

const PlaylistItem = ({
  songIndex,
  song,
  playlistId,
  handleSetPlaylist,
}: Props) => {
  const {
    isPlaying,
    mediaId,
    currentSong,
    setIsPlaying,
    setCurrentSong,
    setPlaylistIndex,
  } = usePlayerStore((state) => state);

  const isCurrentSongInCurrentPlaylistAndPlaying =
    currentSong &&
    isPlaying &&
    mediaId === playlistId &&
    currentSong.id === song.id;

  const songNumber = songIndex + 1;

  const handlePlaySong = () => {
    if (isCurrentSongInCurrentPlaylistAndPlaying) {
      setIsPlaying(!isPlaying);
      return;
    }
    if (playlistId !== mediaId) {
      handleSetPlaylist();
    }
    setPlaylistIndex(songIndex);
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <TableRow
      className={`
      hover:bg-card-primary-dark group
      ${
        isCurrentSongInCurrentPlaylistAndPlaying &&
        "bg-card-primary-dark text-white"
      }
    `}
      key={song.id}
    >
      <TableCell className="relative text-lg">
        <span className="">{songNumber}</span>
        {/* playbutton */}
        <button
          className={`absolute cursor-pointer inset-0 flex justify-center items-center mt-1 ml-1 bg-white text-black w-8 h-8 rounded-full 
            ${
              isCurrentSongInCurrentPlaylistAndPlaying
                ? "opacity-100"
                : "opacity-0"
            } 
            group-hover:opacity-100 hover:scale-110 transition duration-200`}
          onClick={handlePlaySong}
        >
          {isCurrentSongInCurrentPlaylistAndPlaying ? (
            <Pause className="w-3" />
          ) : (
            <Play className="w-3" />
          )}
        </button>
      </TableCell>
      <TableCell className="text-lg">
        <a
          className="hover:underline hover:text-white"
          href={`/songs/${song.id}`}
        >
          {song.title}
        </a>
      </TableCell>
      <TableCell className="text-right overflow-hidden">
        {song.chords && (
          <a
            className="cursor-pointer opacity-0 translate-x-8 bg-[#111] py-1 px-3 rounded-sm group-hover:opacity-100 group-hover:translate-x-0 hover:bg-[#111]/80 transition duration-600"
            href={song.chords}
            target="_blank"
          >
            Acords &rarr;
          </a>
        )}
      </TableCell>
    </TableRow>
  );
};
export default PlaylistItem;
