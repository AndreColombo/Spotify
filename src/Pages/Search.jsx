import { useEffect, useState } from "react";
import SearchC from "../Components/SearchC";

export default function Search() {
  const [sections, setSections] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("http://localhost:3000/sections").then((res) => res.json()),
      fetch("http://localhost:3000/genres").then((res) => res.json()),
    ])
      .then(([sectionsData, genresData]) => {
        setSections(sectionsData);
        setGenres(genresData);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const groupedSections = sections.reduce((acc, section) => {
    const key = section.section;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(section);
    return acc;
  }, {});

  return (
    <>
      <main className="flex flex-col max-h-screen max-w-screen">
        <div className="flex justify-between overflow-auto">
          <SearchC>
            <ul className="grid grid-cols-3 gap-6">
              {genres.map((genre) => (
                <li className="flex bg-77 rounded-md pt-3 pl-3.5 justify-between">
                  <h1 className="text-2xl font-bold">{genre.title}</h1>
                  <img
                    src={genre.capa}
                    className="w-32 rounded rotate-[30deg]"
                  />
                </li>
              ))}
            </ul>
          </SearchC>
        </div>
      </main>
    </>
  );
}
