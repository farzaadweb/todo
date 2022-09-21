import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";

export default function TheNavbar() {
  const _navbarItems = [
    { id: 1, name: "Dashboard", slug: "/", icon: "squares-four-duotone" },
    { id: 2, name: "Controle", slug: "/controle", icon: "cpu-duotone" },
    {
      id: 3,
      name: "Charts",
      slug: "/charts",
      icon: "presentation-chart-duotone",
    },
    { id: 4, name: "Add Task", slug: "/add-task", icon: "plus-circle-duotone" },
    { id: 5, name: "Setting", slug: "/setting", icon: "gear-six-duotone" },
  ];

  return (
    <div className="size-full flex lg:flex-col py-8 bg-[#FEFEFE] shadow-lg shadow-slate-800/10 rounded-lg px-4">
      <Link to="/" className="hidden lg:flex items-center justify-center">
        <Icon
          icon="ph:apple-podcasts-logo"
          className="text-5xl text-zinc-900"
        />
        <span className="text-2xl ml-1 font-semibold ">Google</span>
      </Link>

      <div className="border border-[#F5F5F5] w-full my-8 hidden lg:block"></div>

      <div className="flex lg:flex-col flex-1 lg:space-y-8 space-x-4 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start text-lg text-zinc-600">
        {_navbarItems.map(
          (item: { id: number; name: string; slug: string; icon: string }) => (
            <NavLink
              key={item.id}
              to={item.slug}
              className={({ isActive }) =>
                isActive
                  ? "lg:border-l-4 pl-2 flex items-center border-blue-500 text-blue-400 transition-all group"
                  : "flex items-center text-lg"
              }
            >
              <Icon
                icon={`ph:${item.icon}`}
                className="text-3xl lg:text-2xl mr-2"
              />
              <span className="hidden lg:block">{item.name}</span>
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}
