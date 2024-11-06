export default function Sidebar({ children }) {
  return (
    <>
      <aside className="min-w-[72px] bg-12 rounded-lg overflow-y-scroll">
        <div className="sticky top-0 z-10 flex justify-center items-center bg-12 h-16 rounded-t-lg drop-shadow-xl">
          <img src="/Icons/LibraryGray.png" className="h-5" />
        </div>
        <ul className="flex flex-col items-center space-y-2 mb-2">
          {children}
        </ul>
      </aside>
    </>
  );
}
