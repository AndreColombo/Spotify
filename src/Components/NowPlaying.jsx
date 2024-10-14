export default function NowPlaying() {
  return (
    <>
      <aside className="h-playing w-playing bg-12 rounded-lg px-4 overflow-y-scroll">
        <div className="sticky top-0 z-10 flex justify-between items-center py-4 bg-12">
          <h1 className="font-bold w-fit underlineText">
            <a href="">Músicas Curtidas</a>
          </h1>
          <div className="flex space-x-2 items-center">
            <img src="/Icons/MoreOptions.png" className="h-4" />
            <span className="flex h-8 w-8 justify-center items-center">
              <img src="/Icons/CloseTab.png" className="h-4" />
            </span>
          </div>
        </div>

        <div className="">
          <div>
            <img src="/Musics/LightsUp.png" className="rounded-lg" />
            <div className=" my-2.5">
              <h1 className="font-bold text-2xl line-clamp-1 underlineText">
                Lights Up - Dimitri Vegas & Like Mike Edit
              </h1>
              <p className="text-B3 font-medium underlineText">
                Nicky Romero, Dimitri Vegas & Like Mike
              </p>
            </div>
          </div>

          <div className="bg-22 rounded-lg mt-6">
            <h1 className="font-medium p-4">Videoclipes relacionados</h1>
            <ul className="flex px-4 space-x-4 overflow-x-auto min-h-[158px]">
              <li className="min-w-[162px] max-h-[92px]">
                <img
                  src="/Videoclips/Toulouse.png"
                  className="rounded-lg w-full h-full object-cover"
                />
                <h1 className="underlineText line-clamp-1">
                  Toulouse (2020 Edit)
                </h1>
                <p className="line-clamp-1 text-B3 text-sm">Nicky Romero</p>
              </li>
              <li className="min-w-[162px] max-h-[92px]">
                <img
                  src="/Videoclips/Legacy.png"
                  className="rounded-lg w-full h-full object-cover"
                />
                <h1 className="underlineText line-clamp-1">Legacy</h1>
                <p className="line-clamp-1 text-B3 text-sm">
                  Nicky Romero, Krewella
                </p>
              </li>
              <li className="min-w-[162px] max-h-[92px]">
                <img
                  src="/Videoclips/ICouldBeTheOne.png"
                  className="rounded-lg w-full h-full object-cover"
                />
                <h1 className="underlineText line-clamp-1">
                  I Could Be The One [Avicii vs Nicky Romero]
                </h1>
                <p className="line-clamp-1 text-B3 text-sm">
                  Avicii, Nicky Romero
                </p>
              </li>
              <li className="min-w-[162px] max-h-[92px]">
                <img
                  src="/Videoclips/WhereWouldWeBe.png"
                  className="rounded-lg w-full h-full object-cover"
                />
                <h1 className="underlineText line-clamp-1">
                  Where Would We Be
                </h1>
                <p className="line-clamp-1 text-B3 text-sm">
                  ROZES, Nicky Romero
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-22 rounded-lg mt-6 relative">
            <img src="/Artists/NickyRomero.png" className="rounded-t-lg" />
            <h1 className="font-medium p-4 absolute top-0">Sobre o artista</h1>
            <div className="p-4">
              <h1 className="font-bold underlineText">Nicky Romero</h1>
              <div className="flex justify-between items-center py-1">
                <p className="text-B3">4.514.394 ouvintes mensais</p>
                <button className="border rounded-full py-1 px-3.5 border-B3 font-semibold">
                  Seguir
                </button>
              </div>
              <p className="line-clamp-3 text-B3 text-sm">
                Nicky Romero has progressed from being a young, musical
                wunderkind to become one of the most influential artists of his
                time. As a DJ, producer and mogul whose label is at the
                forefront of modern electronic dance music, it goes without
                saying that Nicky is a force to be reckoned with. From the
                iconic hits "Toulouse" and "I Could Be the One" to his recent #1
                US Dance Radio track ‘Sometimes’ with DallasK & Xylo in 2019.
                Nicky's resume boasts an impressive and lengthy discography of
                originals, remixes, edits and co-productions, proving again and
                again his ability to evolve with the ever-changing landscape of
                electronic music. Perhaps even more telling of his razor-sharp
                prowess and visionary mindset is the success and impact of his
                label Protocol Recordings, setting up recent collaborations with
                David Guetta, Dimitri Vegas & Like Mike.
              </p>
            </div>
          </div>

          <div className="bg-22 rounded-lg p-4 my-4">
            <div className="flex justify-between pb-3.5">
              <h1 className="font-bold">Créditos</h1>
              <button className="font-bold text-sm underlineText">
                Mostrar tudo
              </button>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div>
                  <h1 className="underlineText">Nicky Romero</h1>
                  <p className="text-sm">Artista Principal, Produtor</p>
                </div>
                <button className="border rounded-full py-1 px-3.5 border-B3 font-semibold">
                  Seguir
                </button>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h1 className="underlineText">Dimitri Vegas & Like Mike</h1>
                  <p className="text-sm">Artista Principal, Produtor</p>
                </div>
                <button className="border rounded-full py-1 px-3.5 border-B3 font-semibold">
                  Seguir
                </button>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h1>Nicky Romero</h1>
                  <p className="text-sm">Compositor, Letrista</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-22 rounded-lg p-4 mb-4">
            <div className="flex justify-between pb-3.5">
              <h1 className="font-bold">A seguir</h1>
              <button className="font-bold text-sm underlineText">
                Abrir fila
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/Musics/Speechless.png" className="h-12 rounded" />
              <div className="space-y-1">
                <h1 className="text-sm font-semibold line-clamp-1">
                  Speechless
                </h1>
                <p className="text-sm text-B3 underlineText">Vowed, Jonas Eb</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
