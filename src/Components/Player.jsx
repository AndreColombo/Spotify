export default function Player() {
  return (
    <>
      <main className="flex justify-between items-center px-2 my-3">
        <div className="flex justify-start items-center space-x-4 w-1/3">
          <img src="/Musics/LightsUp.png" className="h-14 rounded" />
          <div>
            <h1 className="text-sm font-semibold">
              Lights Up - Dimitri Vegas & Like Mike Edit
            </h1>
            <p className="text-xs text-B3">
              Nicky Romero, Dimitri Vegas & Lime Mike
            </p>
          </div>
          <img src="/Icons/LikedMusic.png" className="h-4" />
        </div>

        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="flex space-x-6 justify-center items-center mb-1">
            <img src="/Icons/ShuffleGray.png" className="h-3.5" />
            <img src="/Icons/PreviousMusicGray.png" className="h-3.5" />
            <img src="/Icons/Pause.png" className="h-8" />
            <img src="/Icons/NextMusicGray.png" className="h-3.5" />
            <img src="/Icons/RepeatGray.png" className="h-3.5" />
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-white text-opacity-60 text-sm">0:00</p>
            <input type="range" id="MusicTime" />
            <p className="text-white text-opacity-60 text-sm">3:10</p>
          </div>
        </div>

        <div className="flex justify-end space-x-4 items-center w-1/3">
          <img src="/Icons/PlayingNowGray.png" className="h-3.5" />
          <img src="/Icons/LyricsGray.png" className="h-3.5" />
          <img src="/Icons/QueueGray.png" className="h-3.5" />
          <img src="/Icons/ConnectDeviceGray.png" className="h-3.5" />
          <div className="flex space-x-2 items-center">
            <img src="/Icons/VolumeGray.png" className="h-3.5" />
            <input type="range" id="VolumeSlider" />
          </div>
          <img src="/Icons/OpenMiniplayer.png" className="h-3.5" />
          <img src="/Icons/FullScreenGray.png" className="h-3.5" />
        </div>
      </main>
    </>
  );
}
