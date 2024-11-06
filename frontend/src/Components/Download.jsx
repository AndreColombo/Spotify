import Footer from "./Footer";

export default function Download() {
  return (
    <>
      <main className="mx-2 px-5 rounded-lg overflow-y-scroll relative bg-12">
        <div className="absolute inset-0 z-0 w-full bg-gradient-to-b from-[#1e3264] via-12 via-45% to-12"></div>
        <div className="flex flex-col items-center z-10 relative">
          <img src="/DownloadImage.png" className="mt-16 w-[640px]" />
          <h1 className="font-bold text-3xl text-center w-[640px]">
            É a melhor maneira de ouvir as músicas que você adora no seu
            computador. Baixe já o Spotify para computador.
          </h1>
          <a
            href="https://www.spotify.com/br-pt/download/windows/"
            className="text-black bg-[#1ed760] hover:bg-77 rounded-full font-bold text-sm hover:text-[14.5px] hover:leading-[22px] px-7 py-3 mt-7 mb-[72px]"
          >
            Baixe nosso aplicativo gratuito
          </a>
        </div>
        <Footer />
      </main>
    </>
  );
}
