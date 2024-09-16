export default function Download() {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-main h-main bg-gradient-to-b from-[#1e3264] via-12 to-12 rounded-lg overflow-y-scroll">
        <img src="/DownloadImage.png" className="w-downloadImage" />
        <h1 className="flex font-bold text-3xl text-center">
          É a melhor maneira de ouvir as músicas que você adora no seu
          computador. Baixe já o Spotify para computador.
        </h1>
        <a
          href="https://www.spotify.com/br-pt/download/windows/"
          className="text-black bg-77 rounded-full px-7 py-2.5 font-bold"
        >
          Baixe nosso aplicativo gratuito
        </a>
      </main>
    </>
  );
}
