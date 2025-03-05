import PlaylistItem from "@/components/PlaylistItem";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { SongData } from "@/env";
import { Play } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

interface Props {
  playlistId: string;
  playlistMedia: (SongData & { chords: string | undefined })[];
}

const Playlist = ({ playlistId, playlistMedia }: Props) => {
  const { setPlaylist, setMediaId } = usePlayerStore((state) => state);

  const handleSetPlaylist = () => {
    setMediaId(playlistId);
    setPlaylist(playlistMedia);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-10">#</TableHead>
          <TableHead>Títol</TableHead>
          <TableHead className="text-right">Acords</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {playlistMedia.map((song, songIndex) => (
          <PlaylistItem
            key={song.id}
            songIndex={songIndex}
            song={song}
            playlistId={playlistId}
            handleSetPlaylist={handleSetPlaylist}
          />
        ))}
      </TableBody>
    </Table>
  );
};
export default Playlist;
