import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Download from "../Components/Download";
import NowPlaying from "../Components/NowPlaying";
import Player from "../Components/Player";

export default function DownloadSpotify() {
  return (
    <>
      <main className="flex flex-col h-dvh p-2">
        <Header />
        <div className="flex justify-between">
          <Sidebar />
          <Download />
          <NowPlaying />
        </div>
        <Player />
      </main>
    </>
  );
}
