import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      <div className="bg-black h-dvh text-white">
        <Outlet />
      </div>
    </>
  );
}
