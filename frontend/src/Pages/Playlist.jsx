import { useEffect, useState } from "react";
import PlaylistC from "../Components/Playlist";

export default function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("http://localhost:3000/playlists").then((res) => res.json()),
      fetch("http://localhost:3000/musicas").then((res) => res.json()),
    ])
      .then(([playlistsData, musicasData]) => {
        setPlaylists(playlistsData);
        setMusicas(musicasData);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <main className="flex flex-col max-h-screen max-w-screen">
        <div className="flex justify-between overflow-auto">
          <PlaylistC>
            {playlists.slice(0, 1).map((playlist) => (
              <div className="flex space-x-2 py-5 bg-gradient-to-b from-[#4b3692] to-[#291e50] px-6 items-end">
                <img
                  src={playlist.capa}
                  className="h-60 rounded drop-shadow-2xl"
                />
                <div className="pl-4">
                  <p className="text-sm font-medium">Playlist</p>
                  <h1 className="text-7xl font-bold">{playlist.name}</h1>
                  <div className="flex space-x-1 items-center mt-5">
                    <img src="../Profile.png" className="w-6 rounded-full" />
                    <p className="text-sm font-bold">{playlist.criador}</p>
                    <p className="text-sm font-semibold text-B3">
                      • {playlist.musicas} músicas
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <ul className="px-11 space-y-4 mt-6">
              <div className="flex text-B3 justify-between">
                <p className="w-2/6 text-[14.5px]">Título</p>
                <p className="w-1/4 text-[14.5px]">Álbum</p>
                <p className="w-1/5 text-[14.5px]">Adicionada em</p>
                <img src="../Icons/Duracao.png" className="w-5 h-5" />
              </div>
              <hr className="border-[#302c3a] pb-2" />
              {musicas.map((musica) => (
                <li
                  className="flex items-center justify-between"
                  key={musica._id}
                >
                  <div className="flex items-center space-x-2.5 w-2/6">
                    <img src={musica.capa} className="w-10 rounded" />
                    <div className="-space-y-1">
                      <h1 className="font-medium line-clamp-1">
                        {musica.name}
                      </h1>
                      <h1 className="text-B3 text-[14.5px] line-clamp-1">
                        {musica.artista}
                      </h1>
                    </div>
                  </div>
                  <p className="text-B3 text-sm w-1/4 line-clamp-1">
                    {musica.album}
                  </p>
                  <p className="text-B3 text-sm w-1/5">{musica.adicionado}</p>
                  <p className="text-B3 text-sm">{musica.tempo}</p>
                </li>
              ))}
            </ul>
          </PlaylistC>
        </div>
      </main>
    </>
  );
}
