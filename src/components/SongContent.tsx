import LinkButton from "@/components/LinkButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  children: any;
  song: any;
}

const SongContent = ({ children, song }: Props) => {
  return (
    <Tabs defaultValue="lyrics">
      <TabsList className="w-full bg-zinc-700">
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
      <TabsContent value="lyrics" className="mt-4 ml-4">
        {/* <div className="min-w-96 bg-zinc-300 text-zinc-800 p-8 rounded-lg w-fit"> */}
        {/* <h3 className="text-xl text-zinc-900 font-bold mb-2 bg-white w-full">
          Lletra
        </h3> */}
        {children}
        {/* </div> */}
      </TabsContent>
      {/* Acords & Partitura */}
      <TabsContent value="chordsSheets" className="flex flex-col gap-y-2 mt-4">
        {song.chords && (
          <LinkButton href={song.chords}>Acords &rarr;</LinkButton>
        )}
        {song.musicSheet && (
          <LinkButton href={song.musicSheet}>Partitura &rarr;</LinkButton>
        )}
      </TabsContent>
      {/* Videos */}
      <TabsContent
        value="video"
        className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-4"
      >
        {song.videoUrl && (
          <LinkButton href={song.videoUrl}>Video &rarr;</LinkButton>
        )}
        {song.originalVideoUrl && (
          <LinkButton href={song.originalVideoUrl}>
            Video Original &rarr;
          </LinkButton>
        )}
      </TabsContent>
      {/* Info */}
      <TabsContent value="info" className="mt-4">
        {song.originalTitle && (
          <>
            <h4 className="text-2xl text-white mt-4">Títol Original</h4>
            <p>{song.originalTitle}</p>
          </>
        )}
        {song.originalAuthors && (
          <>
            <h4 className="text-2xl text-white mt-4">Autors</h4>
            <p>{song.originalAuthors.join(", ")}</p>
          </>
        )}
        {song.traducedBy && (
          <>
            <h4 className="text-2xl text-white mt-4">Traducció</h4>
            <p>{song.traducedBy.join(", ")}</p>
          </>
        )}
        {song.arrengedBy && (
          <>
            <h4 className="text-2xl text-white mt-4">Interpretació</h4>
            <p>{song.arrengedBy.join(", ")}</p>
          </>
        )}
      </TabsContent>
    </Tabs>
  );
};
export default SongContent;
