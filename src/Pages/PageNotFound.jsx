export default function PageNotFound() {
  return (
    <>
      <main className="bg-12 flex flex-col h-dvh justify-center items-center">
        <img
          src="/ErrorPageLogo.svg"
          alt="Spotify Green Logo"
          className="h-14 w-14"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Página não encontrada</h1>
          <p className="text-B3">Não encontramos a página que você queria.</p>
          <div className="flex flex-col">
            <a href="https://open.spotify.com/">
              <button className="bg-white border border-B3 rounded-full text-black">Início</button>
            </a>
            <a href="https://support.spotify.com/">Ajuda</a>
          </div>
        </div>
      </main>
    </>
  );
}
