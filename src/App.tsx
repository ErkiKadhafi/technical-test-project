import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import 'swiper/css';

function App() {
  return (
    <div className="flex min-h-screen overflow-hidden font-montserrat">
      {/* ======== sidebar ======== */}
      <Sidebar />
      {/* ======== main content ======== */}
      <div
        className={clsx(
          "w-full overflow-y-auto overflow-x-hidden bg-[#F7F9FA]",
          "lg:ml-[280px] py-10 px-8"
        )}
      >
        <Routes>
          <Route path="/" Component={Homepage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
