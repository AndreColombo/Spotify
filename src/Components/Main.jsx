import Footer from "./Footer";

export default function Main({ children, sections }) {
  return (
    <>
      <main className="flex-1 mx-2 bg-12 rounded-lg overflow-y-scroll relative">
        <div className="absolute top-0 left-0 z-0 w-full h-gradient bg-gradient-to-b from-[#211260] via-12 via-75% to-12"></div>
        <div className="sticky top-0 z-20 flex space-x-2 py-4 bg-[#211260] px-11">
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

        <div className="relative z-10 px-11">
          {children}

          {sections}
        </div>

        <div className="px-6">
          <Footer />
        </div>
      </main>
    </>
  );
}
