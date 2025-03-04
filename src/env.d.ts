export type CategoryData = {
  id: string;
  type: string;
  title: string;
  cover: string;
};

export type SongData = {
  id: string;
  type: string;
  title: string;
  cover: string;
  categoryList: string[];
  src: string;
};
