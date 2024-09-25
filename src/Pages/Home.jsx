import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import NowPlaying from "../Components/NowPlaying";
import Player from "../Components/Player";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen max-h-screen p-2">
        <Header />
        <div className="flex justify-between overflow-auto">
          <Sidebar />
          <Main />
          <NowPlaying />
        </div>
        <Player />
      </main>
    </>
  );
}
