export default function Header() {
  return (
    <>
      <header className="w-header flex items-center mb-2 justify-between">
        <a href="/">
          <img src="/SpotifyWhiteLogo.png" className="h-8 ml-5 " />
        </a>
        <div className="flex space-x-2.5">
          <button className="flex h-12 w-12 bg-F1 rounded-full justify-center items-center">
            <img src="/Icons/HomeGray.png" className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="O que você quer ouvir?"
            className="w-search h-12 bg-F1 rounded-full"
          />
        </div>
        <a href="/download" className="flex items-center space-x-1.5">
          <img src="/Icons/DownloadSpotify.png" className="h-4 w-4" />
          <p className="font-bold underlineText text-sm">Instalar aplicativo</p>
        </a>
        <button className="flex h-12 w-12 bg-F1 rounded-full justify-center items-center">
          <img src="/Profile.png" className="h-8 w-8 rounded-full" />
        </button>
      </header>
    </>
  );
}
