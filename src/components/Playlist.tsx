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

interface Props {
  playlistId: string;
  playlistMedia: (SongData & { chords: string | undefined })[];
}

const Playlist = ({ playlistId, playlistMedia }: Props) => {
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
        {/* map playlist */}
        {playlistMedia.map((song, songIndex) => {
          const songNumber = songIndex + 1;
          return (
            <TableRow
              className="hover:bg-card-primary-dark group"
              key={song.id}
            >
              <TableCell className="relative text-lg">
                <span className="">{songNumber}</span>
                {/* playbutton */}
                <button className="absolute cursor-pointer inset-0 flex justify-center items-center mt-1 ml-1 bg-white text-black w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition duration-200">
                  <Play className="w-3" />
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
        })}
        {/*  */}
      </TableBody>
    </Table>
  );
};
export default Playlist;
