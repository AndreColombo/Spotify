export default function Main() {
  return (
    <>
      <main className="w-main bg-12 rounded-lg overflow-y-scroll relative">
        <div className="absolute top-0 left-0 z-0 w-full h-gradient bg-gradient-to-b from-[#211260]  to-12"></div>
        <div className="sticky top-0 z-20 flex space-x-2 py-4 bg-[#211260] px-6">
          <span className="bg-white rounded-full pt-1 pb-2 px-3 text-black text-sm">
            Tudo
          </span>
          <span className="bg-white bg-opacity-10 rounded-full pt-1 pb-2 px-3 text-sm font-medium">
            Música
          </span>
          <span className="bg-white bg-opacity-10 rounded-full pt-1 pb-2 px-3 text-sm font-medium">
            Podcasts
          </span>
        </div>

        <div className="relative z-10 px-6">
          <div className="grid grid-cols-4 py-1">
            <div className="flex items-center rounded bg-white bg-opacity-10 mr-1 my-1">
              <img src="/Playlists/LikedSongs.png" className="rounded-l h-12" />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Músicas Curtidas
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 mx-1 my-1">
              <img
                src="/Playlists/DiscoverWeekly.png"
                className="rounded-l h-12"
              />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Descobertas da Semana
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 mx-1 my-1">
              <img src="/Playlists/LikedSongs.png" className="rounded-l h-12" />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Músicas Curtidas
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 ml-1 my-1">
              <img src="/Playlists/LikedSongs.png" className="rounded-l h-12" />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Músicas Curtidas
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 mr-1 my-1">
              <img
                src="/Playlists/BigRoomDance.png"
                className="rounded-l h-12"
              />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Big Room Dance
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 mx-1 my-1">
              <img src="/Playlists/LikedSongs.png" className="rounded-l h-12" />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Músicas Curtidas
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 mx-1 my-1">
              <img src="/Playlists/DeepHouse.png" className="rounded-l h-12" />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Deep House 2024
              </h1>
            </div>
            <div className="flex items-center rounded bg-white bg-opacity-10 ml-1 my-1">
              <img
                src="/Playlists/ChaseTheSun.png"
                className="rounded-l h-12"
              />
              <h1 className="text-sm font-bold line-clamp-2 m-2">
                Chase The Sun
              </h1>
            </div>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Feito para você
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Seus mixes mais ouvidos
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Tocados recentemente
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Suas músicas estão com saudade
              </h1>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Suas playlists
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <h1 className="">Descobertas semanais</h1>
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  De andrerosa1805
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <h1 className="">Descobertas semanais</h1>
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  De andrerosa1805
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <h1 className="">Descobertas semanais</h1>
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  De andrerosa1805
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <h1 className="">Descobertas semanais</h1>
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  De andrerosa1805
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <h1 className="">Descobertas semanais</h1>
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  De andrerosa1805
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <h1 className="">Descobertas semanais</h1>
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  De andrerosa1805
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <p className="text-B3 text-xs">
              Música sem parar com base nos seus artistas e faixas que você
              adora.
            </p>
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Estações recomendadas
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Ah, o Sábado!
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Podcasts favoritos
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Programas que talvez você curta
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Episódios para você
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Podcasts com vídeo
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Popular entre ouvintes de MuzyCAST
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <p className="text-B3 text-xs">
              Todos os maiores sucessos de um artista em um só lugar.
            </p>
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                O melhor de cada artista
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <p className="text-B3 text-xs">
              Inspirado na sua atividade recente
            </p>
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Com base no que você ouviu recentemente
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Estações de rádio populares
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Parecido com Falden
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Para fãs de Blasterjaxx
              </h1>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Hiperfoco
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Para fãs de Timmy Trumpet
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14">
            <div className="flex justify-between items-end mb-6">
              <h1 className="font-bold text-2xl underlineText whiteText">
                Descobertas para você
              </h1>
              <a
                href=""
                className="text-B3 text-sm font-bold pr-2 underlineText"
              >
                Mostrar tudo
              </a>
            </div>
            <ul className="flex justify-between space-x-6">
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Alok, ACRAZE, Sigala e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  sad girls, ZHANGYE, Josh Le Tissier e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  JKRS, Girl On Couch, Grim.exe e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  Matheo Lyon, Decanõe, myndstream e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  MEDUZA, Topic, Riton e mais
                </p>
              </li>
              <li>
                <img
                  src="/Playlists/LikedSongs.png"
                  className="rounded-md mb-2"
                />
                <p className="text-B3 text-sm font-medium line-clamp-2">
                  RENN, Afinity, Caleb Stewart e mais
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-14 pb-4 mx-2">
            <ul className="flex justify-between">
              <li>
                <h1 className="font-bold">Empresa</h1>
                <ul className="text-B3 flex flex-col">
                  <a
                    href="https://www.spotify.com/br-pt/about-us/contact/"
                    className="underlineText whiteText"
                  >
                    Sobre
                  </a>
                  <a
                    href="https://www.lifeatspotify.com/"
                    className="underlineText whiteText"
                  >
                    Empregos
                  </a>
                  <a
                    href="https://newsroom.spotify.com/"
                    className="underlineText whiteText"
                  >
                    For the Record
                  </a>
                </ul>
              </li>
              <li>
                <h1 className="font-bold">Comunidades</h1>
                <ul className="text-B3 flex flex-col">
                  <a
                    href="https://artists.spotify.com/home"
                    className="underlineText whiteText"
                  >
                    Para Artistas
                  </a>
                  <a
                    href="https://developer.spotify.com/"
                    className="underlineText whiteText"
                  >
                    Desenvolvedores
                  </a>
                  <a
                    href="https://ads.spotify.com/pt-BR/"
                    className="underlineText whiteText"
                  >
                    Publicidade
                  </a>
                  <a
                    href="https://investors.spotify.com/home/default.aspx"
                    className="underlineText whiteText"
                  >
                    Investidores
                  </a>
                  <a
                    href="https://spotifyforvendors.com/"
                    className="underlineText whiteText"
                  >
                    Fornecedores
                  </a>
                </ul>
              </li>
              <li>
                <h1 className="font-bold">Links úteis</h1>
                <ul className="text-B3 flex flex-col">
                  <a
                    href="https://support.spotify.com/br-pt/"
                    className="underlineText whiteText"
                  >
                    Suporte
                  </a>
                  <a
                    href="https://www.spotify.com/br-pt/download/windows/"
                    className="underlineText whiteText"
                  >
                    Aplicativo móvel grátis
                  </a>
                </ul>
              </li>
              <li>
                <h1 className="font-bold">Planos do Spotify</h1>
                <ul className="text-B3 flex flex-col">
                  <a
                    href="https://www.spotify.com/br-pt/premium/?ref=spotifycom_footer_premium_individual"
                    className="underlineText whiteText"
                  >
                    Premium Individual
                  </a>
                  <a
                    href="https://www.spotify.com/br-pt/duo/?ref=spotifycom_footer_premium_duo"
                    className="underlineText whiteText"
                  >
                    Premium Duo
                  </a>
                  <a
                    href="https://www.spotify.com/br-pt/family/?ref=spotifycom_footer_premium_family"
                    className="underlineText whiteText"
                  >
                    Premium Família
                  </a>
                  <a
                    href="https://www.spotify.com/br-pt/student/?ref=spotifycom_footer_premium_student"
                    className="underlineText whiteText"
                  >
                    Premium Universitário
                  </a>
                  <a
                    href="https://www.spotify.com/br-pt/free/?ref=spotifycom_footer_free"
                    className="underlineText whiteText"
                  >
                    Spotify Free
                  </a>
                </ul>
              </li>
              <li className="flex space-x-5">
                <span className="h-10 w-10 bg-22 rounded-full flex justify-center items-center">
                  <a href="https://www.instagram.com/spotify">
                    <img src="/Icons/Instagram.png" className="h-4" />
                  </a>
                </span>
                <span className="h-10 w-10 bg-22 rounded-full flex justify-center items-center">
                  <a href="https://twitter.com/spotify">
                    <img src="/Icons/Twitter.png" className="h-4" />
                  </a>
                </span>
                <span className="h-10 w-10 bg-22 rounded-full flex justify-center items-center">
                  <a href="https://www.facebook.com/SpotifyBrasil/?brand_redir=6243987495">
                    <img src="/Icons/Facebook.png" className="h-4" />
                  </a>
                </span>
              </li>
            </ul>

            <hr className="border-22 my-9" />

            <div className="flex justify-between text-B3 text-sm font-medium mb-16">
              <div className="flex space-x-4">
                <a
                  href="https://www.spotify.com/br-pt/legal/end-user-agreement/"
                  className="whiteText"
                >
                  Legal
                </a>
                <a
                  href="https://www.spotify.com/br-pt/safetyandprivacy"
                  className="whiteText"
                >
                  Segurança e Centro de privacidade
                </a>
                <a
                  href="https://www.spotify.com/br-pt/legal/privacy-policy/"
                  className="whiteText"
                >
                  Política de privacidade
                </a>
                <a
                  href="https://www.spotify.com/br-pt/legal/cookies-policy/"
                  className="whiteText"
                >
                  Cookies
                </a>
                <a
                  href="https://www.spotify.com/br-pt/legal/privacy-policy/#s3"
                  className="whiteText"
                >
                  Sobre anúncios
                </a>
                <a
                  href="https://www.spotify.com/br-pt/accessibility"
                  className="whiteText"
                >
                  Acessibilidade
                </a>
              </div>
              <p className="mr-4">© 2024 Spotify AB</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
