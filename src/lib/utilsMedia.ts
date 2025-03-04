export function formatCatSongsNumString(num: number | undefined) {
  if (!num || num === 0) {
    return "0 Cançons";
  }
  if (num === 1) {
    return "1 Cançó";
  }
  return `${num} Cançons`;
}

export function getYoutubeId(url: string) {
  const p =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const match = url.match(p);
  return match ? match[1] : false;
}
