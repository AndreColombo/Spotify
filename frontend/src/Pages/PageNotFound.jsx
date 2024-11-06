export default function PageNotFound() {
  return (
    <>
      <main className="bg-12 flex flex-col h-dvh justify-center items-center">
        <img
          src="/ErrorPageLogo.svg"
          alt="Spotify Green Logo"
          className="h-14 w-14 mb-9"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4">Página não disponível</h1>
          <p className="text-B3">Algo deu errado. Tente de novo mais tarde.</p>
          <div className="flex flex-col items-center">
            <a href="../" className="w-auto my-8">
              <button className="bg-white border border-B3 rounded-full text-black font-medium py-2.5 px-7">
                Início
              </button>
            </a>
            <a
              href="https://support.spotify.com/"
              className="underlineText font-bold w-screen text-center"
            >
              Ajuda
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
