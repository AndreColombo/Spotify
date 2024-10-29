export default function NowPlaying({ children }) {
  return (
    <>
      <aside className="w-[381px] bg-12 rounded-lg overflow-y-scroll">
        <div className="sticky top-0 z-10 flex justify-between items-center py-3 bg-12 px-4 drop-shadow-xl">
          <h1 className="font-bold text-sm w-fit underlineText">
            <a href="">Músicas Curtidas</a>
          </h1>
          <div className="flex space-x-2 items-center">
            <img src="/Icons/MoreOptions.png" className="h-4" />
            <span className="flex h-8 w-8 justify-center items-center">
              <img src="/Icons/CloseTab.png" className="h-4" />
            </span>
          </div>
        </div>

        <div className="px-4">{children}</div>
      </aside>
    </>
  );
}
