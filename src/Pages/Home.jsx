import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Main from "../Components/Main";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("http://localhost:3000/playlists").then((res) => res.json()),
      fetch("http://localhost:3000/sections").then((res) => res.json()),
    ])
      .then(([playlistsData, sectionsData]) => {
        setPlaylists(playlistsData);
        setSections(sectionsData);
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
          <Main>
            <ul className="grid grid-cols-4 gap-2">
              {playlists
                .slice(0, 2)
                .concat(
                  playlists
                    .slice(2)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 6)
                )
                .map((playlist) => (
                  <Link to={`/playlist/${playlist._id}`}>
                    <li
                      key={playlist._id}
                      className="flex items-center rounded bg-white bg-opacity-10 "
                    >
                      <img src={playlist.capa} className="rounded-l h-10" />
                      <h1 className="text-sm font-bold line-clamp-2 mx-2">
                        {playlist.name}
                      </h1>
                    </li>
                  </Link>
                ))}
            </ul>

            <ul>
              {Object.keys(groupedSections).map((sectionKey) => (
                <li key={sectionKey} className="mt-12">
                  <Link to={`/section/${groupedSections[sectionKey][0]._id}`}>
                    <div className="flex justify-between items-end mb-5">
                      <h1 className="font-bold text-2xl underlineText whiteText">
                        {sectionKey}
                      </h1>
                      <p className="text-[13px] font-bold pr-2 underlineText">
                        Mostrar tudo
                      </p>
                    </div>
                  </Link>
                  <ul className="flex space-x-6 overflow-x-scroll">
                    {groupedSections[sectionKey].map((section) => (
                      <li key={section._id}>
                        <Link to={`/playlist/${section._id}`}>
                          <img
                            src={section.capa}
                            className="rounded-md mb-2 max-w-44"
                          />
                          <p className="text-B3 text-xs font-medium line-clamp-2">
                            {section.criador}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Main>
        </div>
      </main>
    </>
  );
}
