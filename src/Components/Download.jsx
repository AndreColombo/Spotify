import Footer from "./Footer";

export default function Download() {
  return (
    <>
      <main className="flex-1 flex-col mx-2 px-5 rounded-lg overflow-y-scroll relative bg-12">
        <div className="absolute inset-0 z-0 w-full bg-gradient-to-b from-[#1e3264] via-12 via-45% to-12"></div>
        <div className="flex flex-col justify-center items-center w-[580px] z-10 relative mx-auto">
          <img src="/DownloadImage.png" className="mt-14" />
          <h1 className="flex font-bold text-3xl text-center">
            É a melhor maneira de ouvir as músicas que você adora no seu
            computador. Baixe já o Spotify para computador.
          </h1>
          <a
            href="https://www.spotify.com/br-pt/download/windows/"
            className="text-black bg-[#1ed760] rounded-full font-bold text-sm px-7 py-3 hover:bg-77 hover:text-[14.5px] hover:leading-[22px] mt-7 mb-[72px]"
          >
            Baixe nosso aplicativo gratuito
          </a>
        </div>

        <Footer />
      </main>
    </>
  );
}
