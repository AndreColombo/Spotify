import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Download from "../Components/Download";
import NowPlaying from "../Components/NowPlaying";
import Player from "../Components/Player";

export default function DownloadSpotify() {
  const [playlists, setPlaylists] = useState([]);
  const [artistas, setArtistas] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("http://localhost:3000/playlists").then((res) => res.json()),
      fetch("http://localhost:3000/artistas").then((res) => res.json()),
      fetch("http://localhost:3000/musicas").then((res) => res.json()),
    ])
      .then(([playlistsData, artistasData, musicasData]) => {
        setPlaylists(playlistsData);
        setArtistas(artistasData);
        setMusicas(musicasData);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen max-h-screen p-2">
        <Header />
        <div className="flex justify-between overflow-auto">
          <Sidebar>
            {playlists.map((playlist) => (
              <Link to={`/playlist/{playlist.id}`}>
                <li key={playlist.id}>
                  <img src={playlist.capa} className="h-14 p-1 rounded-lg" />
                </li>
              </Link>
            ))}
            {artistas.map((artista) => (
              <li key={artista.id}>
                <img
                  src={artista.profile}
                  className="h-14 w-14 p-1 rounded-full object-cover"
                />
              </li>
            ))}
          </Sidebar>
          <Download />
          <NowPlaying>
            {musicas.slice(0, 1).map((musica) => (
              <div key={musica._id}>
                <img src={musica.capa} className="rounded-lg" />
                <div className=" my-2.5">
                  <h1 className="font-bold text-2xl line-clamp-1 underlineText">
                    {musica.name}
                  </h1>
                  <p className="text-B3 font-medium underlineText">
                    {musica.artista}
                  </p>
                </div>
              </div>
            ))}

            {/* videoclips */}
            <div className="bg-22 rounded-lg mt-6">
              <h1 className="font-medium p-4">Videoclipes relacionados</h1>
              <ul className="flex px-4 space-x-4 overflow-x-auto min-h-[158px]">
                {musicas.map((musica) =>
                  musica.videoclips.map((videoclip) => (
                    <li className="min-w-[162px] max-h-[92px]">
                      <img
                        src={videoclip[1]}
                        className="rounded-lg w-full h-full object-cover"
                      />
                      <h1 className="underlineText line-clamp-1">
                        {videoclip[2]}
                      </h1>
                      <p className="line-clamp-1 text-B3 text-sm">
                        {videoclip[3]}
                      </p>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* sobreArtista */}
            {artistas.slice(8, 9).map((artista) => (
              <div className="bg-22 rounded-lg mt-6 relative">
                <img src={artista.banner} className="rounded-t-lg" />
                <h1 className="font-medium p-4 absolute top-0">
                  Sobre o artista
                </h1>
                <div className="p-4">
                  <h1 className="font-bold underlineText">{artista.name}</h1>
                  <div className="flex justify-between items-center py-1">
                    <p className="text-B3">4.514.394 ouvintes mensais</p>
                    <button className="border rounded-full py-1 px-3.5 border-B3 font-semibold">
                      Seguir
                    </button>
                  </div>
                  <p className="line-clamp-3 text-B3 text-sm">
                    {artista.sobre}
                  </p>
                </div>
              </div>
            ))}

            {/* Créditos */}
            <div className="bg-22 rounded-lg p-4 my-4">
              <div className="flex justify-between pb-3.5">
                <h1 className="font-bold">Créditos</h1>
                <button className="font-bold text-sm underlineText">
                  Mostrar tudo
                </button>
              </div>
              <ul className="space-y-4">
                {musicas.slice(0, 1).map((musica) =>
                  musica.creditos.map((credito) => (
                    <li className="flex justify-between items-center">
                      <div>
                        <h1 className="underlineText">{credito[1]}</h1>
                        <p className="text-sm">{credito[2]}</p>
                      </div>
                      <button className="border rounded-full py-1 px-3.5 border-B3 font-semibold">
                        Seguir
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* aSeguir */}
            {musicas.slice(1, 2).map((aSeguir) => (
              <div className="bg-22 rounded-lg p-4 mb-4">
                <div className="flex justify-between pb-3.5">
                  <h1 className="font-bold">A seguir</h1>
                  <button className="font-bold text-sm underlineText">
                    Abrir fila
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/Musics/Speechless.png" className="h-12 rounded" />
                  <div className="space-y-1">
                    <h1 className="text-sm font-semibold line-clamp-1">
                      {aSeguir.name}
                    </h1>
                    <p className="text-sm text-B3 underlineText">
                      {aSeguir.artista}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </NowPlaying>
        </div>
        <Player>
          {musicas.slice(0, 1).map((musica) => (
            <div
              key={musica.id}
              className="flex justify-start items-center space-x-4 w-1/3"
            >
              <img src={musica.capa} className="h-14 rounded" />
              <div>
                <h1 className="text-sm font-semibold">{musica.name}</h1>
                <p className="text-xs text-B3">{musica.artista}</p>
              </div>
              <img src="/Icons/LikedMusic.png" className="h-4" />
            </div>
          ))}
        </Player>
      </main>
    </>
  );
}
