import { categories, songs, type Song } from "@/lib/data";

function getCategory(categoryId: string) {
  return categories.find((category) => category.id === categoryId);
}
function getCategorySongs(categoryId: string) {
  return songs.filter((song) => song.categoriesId.includes(categoryId));
}
function getSong(songId: string) {
  return songs.find((song) => song.id === songId);
}
function getSongCategories(song: Song) {
  return (
    song.categoriesId
      .map(getCategory)
      .filter((category) => category !== undefined) // filters out undefined entries
      .map(({ title, slug }) => ({ title, slug })) ?? []
  );
}

export function getYoutubeId(url: string) {
  const p =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const match = url.match(p);
  return match ? match[1] : false;
}

export { getCategory, getCategorySongs, getSong, getSongCategories };
