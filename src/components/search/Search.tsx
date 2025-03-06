import type { CategorySearchData, SongSearchData } from "@/env";
import { normalizeString } from "@/lib/utilsMedia";
import { useState, type ChangeEvent } from "react";

interface Props {
  categoriesData: CategorySearchData[];
  songsData: SongSearchData[];
}

const Search = ({ categoriesData, songsData }: Props) => {
  const [categories, setCategoreis] =
    useState<CategorySearchData[]>(categoriesData);
  const [songs, setSongs] = useState<SongSearchData[]>(songsData);

  const [filteredCategories, setFilteredCategories] = useState<
    CategorySearchData[]
  >([]);
  const [filteredSongs, setFilteredSongs] = useState<SongSearchData[]>([]);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchStr = e.target.value;

    if (searchStr === "") {
      setInputText("");
      setFilteredCategories([]);
      setFilteredSongs([]);
      return;
    }

    setInputText(searchStr);

    setFilteredCategories(
      categories.filter((category) => {
        const wordsMatch = category.title.split(" ").filter((word) => {
          const searchWordsMatch = searchStr
            .split(" ")
            .filter((searchWord) =>
              normalizeString(word).includes(normalizeString(searchWord))
            );
          return searchWordsMatch.length > 0;
        });
        return wordsMatch.length > 0;
        // category.title.toLowerCase().includes(searchStr.toLowerCase());
      })
    );

    setFilteredSongs(
      songs.filter((song) => {
        const wordsMatch = song.title.split(" ").filter((word) => {
          const searchWordsMatch = searchStr
            .split(" ")
            .filter((searchWord) =>
              normalizeString(word).includes(normalizeString(searchWord))
            );
          return searchWordsMatch.length > 0;
        });
        return wordsMatch.length > 0;
        // song.title.toLowerCase().includes(searchStr.toLowerCase())
      })
    );
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <input
          className="bg-bg-input px-4 py-2 text-white rounded-lg text-lg w-full"
          type="text"
          placeholder="Què vols escoltar?"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <h4 className="text-2xl text-white">Categories</h4>
        <ul className="space-y-2">
          {filteredCategories.map((category) => (
            <li key={category.id}>
              <a
                className="w-full border border-text-dark px-4 py-2 rounded-lg inline-block hover:text-white hover:underline"
                href={`/categories/${category.id}`}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="text-2xl text-white">Cançons</h4>
        <ul className="space-y-2">
          {filteredSongs.map((song) => (
            <li key={song.id}>
              <a
                className="w-full border border-text-dark px-4 py-2 rounded-lg inline-block hover:text-white hover:underline"
                href={`/songs/${song.id}`}
              >
                {song.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Search;
