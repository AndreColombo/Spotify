import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import NowPlaying from "../Components/NowPlaying";
import Player from "../Components/Player";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/playlists")
      .then((res) => res.json())
      .then((data) => setPlaylists(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/musicas")
      .then((res) => res.json())
      .then((data) => setMusicas(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/artistas")
      .then((res) => res.json())
      .then((data) => setArtistas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen max-h-screen p-2">
        <Header />
        <div className="flex justify-between overflow-auto">
          <Sidebar>
            {playlists.map((playlist) => (
              <li>
                <img src={playlist.capa} className="h-14 p-1 rounded-lg" />
              </li>
            ))}
            {musicas.map((musica) => (
              <li>
                <img src={musica.capa} className="h-14 p-1 rounded-lg" />
              </li>
            ))}
            {artistas.map((artista) => (
              <li>
                <img
                  src={artista.profile}
                  className="h-14 w-14 p-1 rounded-full object-cover"
                />
              </li>
            ))}
          </Sidebar>
          <Main />
          <NowPlaying />
        </div>
        <Player />
      </main>
    </>
  );
}
