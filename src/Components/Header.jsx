export default function Header() {
  return (
    <>
      <header className="w-screen flex justify-between items-center mb-2 px-4">
        <div className="w-1/3">
          <a href="/">
            <img src="/SpotifyWhiteLogo.png" className="h-8 ml-1" />
          </a>
        </div>

        <div className="flex space-x-2.5 w-1/3">
          <button className="flex h-11 w-11 bg-F1 rounded-full justify-center items-center">
            <img src="/Icons/HomeGray.png" className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="O que você quer ouvir?"
            className="w-full h-11 bg-F1 rounded-full"
          />
        </div>

        <div className="flex space-x-5 justify-end w-1/3">
          <a href="/download" className="flex items-center space-x-1.5">
            <img src="/Icons/DownloadSpotify.png" className="h-4 w-4" />
            <p className="font-bold underlineText text-sm">
              Instalar aplicativo
            </p>
          </a>
          <button className="flex h-11 w-11 bg-F1 rounded-full justify-center items-center">
            <img
              src="https://i.scdn.co/image/ab67757000003b82722393b1b05e86bfe5fd381c"
              className="p-2 rounded-full"
            />
          </button>
        </div>
      </header>
    </>
  );
}
