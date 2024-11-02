import Footer from "./Footer";

export default function SearchC({ children }) {
  return (
    <>
      <main className="flex-1 mx-2 bg-12 rounded-lg overflow-y-scroll relative p-7">
        <h1 className="font-bold text-2xl mt-7 mb-5">
          Navegar por todas as seções
        </h1>
        {children}
        <Footer />
      </main>
    </>
  );
}
