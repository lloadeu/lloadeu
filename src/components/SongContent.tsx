import LinkButton from "@/components/LinkButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  children: any;
  song: any;
}

const SongContent = ({ children, song }: Props) => {
  return (
    <Tabs defaultValue="lyrics">
      <TabsList className="w-full">
        <TabsTrigger value="lyrics">Lletra</TabsTrigger>
        {(song.chords || song.musicSheet) && (
          <TabsTrigger value="chordsSheets">Acords & Partitures</TabsTrigger>
        )}
        {(song.videoUrl || song.originalVideoUrl) && (
          <TabsTrigger value="video">Video</TabsTrigger>
        )}
        <TabsTrigger value="info">Info</TabsTrigger>
      </TabsList>
      {/* Lletra */}
      <TabsContent value="lyrics" className="flex justify-center mt-4">
        <div className="min-w-96 bg-zinc-300 text-zinc-800 p-8 rounded-lg w-fit">
          <h3 className="text-xl text-zinc-900 font-bold mb-2">Lletra</h3>
          {children}
        </div>
      </TabsContent>
      {/* Acords & Partitura */}
      <TabsContent
        value="chordsSheets"
        className="flex flex-col gap-y-2 max-w-40 mt-4"
      >
        {song.chords && (
          <LinkButton
            href={song.chords}
            className="flex justify-between w-full"
          >
            Acords
            <span className="grow text-right">&rarr;</span>
          </LinkButton>
        )}
        {song.musicSheet && (
          <LinkButton
            href={song.musicSheet}
            className="flex justify-between w-full"
          >
            Partitura
            <span className="grow text-right">&rarr;</span>
          </LinkButton>
        )}
      </TabsContent>
      {/* Videos */}
      <TabsContent
        value="video"
        className="flex flex-col gap-y-2 max-w-40 mt-4"
      >
        {song.videoUrl && (
          <LinkButton
            href={song.videoUrl}
            className="flex justify-between w-full"
          >
            Video
            <span className="grow text-right">&rarr;</span>
          </LinkButton>
        )}
        {song.originalVideoUrl && (
          <LinkButton
            href={song.originalVideoUrl}
            className="flex justify-between w-full"
          >
            Video Original
            <span className="grow text-right">&rarr;</span>
          </LinkButton>
        )}
      </TabsContent>
      {/* Info */}
      <TabsContent value="info" className="mt-4">
        {song.originalTitle && (
          <>
            <h4 className="text-xl text-white mt-2">Títol Original</h4>
            <p>{song.originalTitle}</p>
          </>
        )}
        {song.originalAuthors && (
          <>
            <h4 className="text-xl text-white mt-2">Autors</h4>
            <p>{song.originalAuthors.join(", ")}</p>
          </>
        )}
        {song.traducedBy && (
          <>
            <h4 className="text-xl text-white mt-2">Traducció</h4>
            <p>{song.traducedBy.join(", ")}</p>
          </>
        )}
        {song.arrengedBy && (
          <>
            <h4 className="text-xl text-white mt-2">Interpretació</h4>
            <p>{song.arrengedBy.join(", ")}</p>
          </>
        )}
      </TabsContent>
    </Tabs>
  );
};
export default SongContent;
