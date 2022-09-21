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
    <div className="size-full flex flex-col py-8 bg-[#FEFEFE] shadow-lg shadow-slate-800/10 rounded-lg px-4">
      <Link to="/" className="flex items-center justify-center">
        <Icon
          icon="ph:apple-podcasts-logo"
          className="text-5xl text-zinc-900"
        />
        <span className="text-2xl ml-1 font-semibold">Google</span>
      </Link>

      <div className="border border-[#F5F5F5] w-full my-8"></div>

      <div className="flex-1 space-y-8 text-lg text-zinc-600">
        {_navbarItems.map(
          (item: { id: number; name: string; slug: string; icon: string }) => (
            <NavLink
              key={item.id}
              to={item.slug}
              className={({ isActive }) =>
                isActive
                  ? "border-l-4 pl-2 flex items-center border-blue-500 text-blue-400 transition-all group"
                  : "flex items-center text-lg"
              }
            >
              <Icon icon={`ph:${item.icon}`} className="text-2xl mr-2" />
              {item.name}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}
