import Dashboard from "./Dashboard";
import Addtask from "./Addtask";
import Charts from "./charts";
 

export const routers = [
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
  }
];
