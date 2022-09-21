import { TheNavbar } from "../components/segments";
import { routers } from "../routes/index";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Layout() {
  return (
    <div className="w-full h-screen">
      <div className="h-12 w-full">
        <img src="pattern.jpg" alt="" className="size-full object-cover" />
      </div>
      <div className="w-full h-[calc(100vh-3rem)] px-3 lg:px-4 flex">
        <div className="w-64 h-full py-6">
          <TheNavbar />
        </div>
        <div className="w-[calc(100%-16rem)] h-full overflow-y-auto py-6 px-3 lg:px-10 -mx-2">
          <Routes>
            {routers.map((route: any) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
