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

export type SongSearchData = {
  title: string;
  id: string;
};
export type CategorySearchData = {
  title: string;
  id: string;
};
