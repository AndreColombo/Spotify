import Footer from "./Footer";

export default function PlaylistC({ children }) {
  return (
    <>
      <main className="flex-1 mx-2 bg-12 rounded-lg overflow-y-scroll relative">
        {children}

        <div className="px-6">
          <Footer />
        </div>
      </main>
    </>
  );
}
