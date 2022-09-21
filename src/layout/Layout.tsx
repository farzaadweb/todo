import Dashboard from "../routes/Dashboard";
import Addtask from "../routes/Addtask";
import Charts from "../routes/charts";

import { TheNavbar } from "../components/segments";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Layout() {
  const routers = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/add-task",
      element: <Addtask />,
    },
    {
      path: "/Charts",
      element: <Charts />,
    },
  ];
  return (
    <div className="w-full h-full lg:h-screen">
      <div className="h-12 w-full">
        <img src="pattern.jpg" alt="" className="size-full object-cover" />
      </div>
      <div className="w-full h-[calc(100vh-3rem)] lg:flex">
        <div className="lg:w-64 h-16 lg:h-full">
          <TheNavbar />
        </div>
        <div className="lg:w-[calc(100%-16rem)] lg:h-full lg:overflow-y-auto py-8 lg:py-6 px-3 lg:px-8">
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
