import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { SegmentHeader } from "../../components/segments";
import "./index.css";

export default function Dash() {
  let _tasks: any = [];
  async function runTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    _tasks = response.ok && (await response.json());
  }
  runTasks();

  const _shortcutItems = [
    {
      id: 1,
      name: "Controle",
      slug: "/controle",
      icon: "cpu",
      description:
        "Add your tasks, categories and targets to your dashboard and have a good life.",
    },
    {
      id: 2,
      name: "Charts",
      slug: "/charts",
      icon: "presentation-chart",
      description:
        "Add your tasks, categories and targets to your dashboard and have a good life.",
    },
    {
      id: 3,
      name: "Add task",
      slug: "/add-task",
      icon: "folder-notch-plus",
      description:
        "Add your tasks, categories and targets to your dashboard and have a good life.",
    },
    {
      id: 4,
      name: "Setting",
      slug: "/Setting",
      icon: "gear-six",
      description:
        "Add your tasks, categories and targets to your dashboard and have a good life.",
    },
  ];

  const _totals = [
    {
      id: 1,
      number: 596,
      title: "Total Tasks",
      description: "total tasks yo did.",
    },
    {
      id: 2,
      number: 12,
      title: "In Progress",
      description: "in progress tasks.",
    },
    {
      id: 3,
      number: 621,
      title: "Done Tasks",
      description: "the all done tasks from list.",
    },
    {
      id: 4,
      number: 1000,
      title: "Canceled Tasks",
      description: "canceled tasks from list.",
    },
  ];

  return (
    <div className="size-full">
      <div className="flex justify-center h-28 lg:h-32">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 8,
              centeredSlides: false,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {_shortcutItems.map((item: any) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-xl border flex items-center px-4 group shortcut-card"
            >
              <Link to={item.slug} className="" key={item.slug}>
                <span className="flex items-center text-zinc-800 group-hover:text-blue-500 z-40">
                  <Icon icon={`ph:${item.icon}`} className="text-4xl" />
                  <span className="text-xl ml-2 font-bold">{item.name}</span>
                </span>
                <p className="mt-2 text-sm text-slate-400">
                  {item.description}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-[calc(100%-8rem)] flex mt-6">
        <div className="w-full h-fit py-6 rounded-md bg-blue-100">
          <SegmentHeader>Short Prognosticate</SegmentHeader>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
                centeredSlides: false,
              },
            }}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="flex justify-between mt-8"
          >
            {_totals.map((item: any) => (
              <SwiperSlide className="flex flex-col items-center" key={item.id}>
                <span className="text-5xl font-bold text-blue-500">
                  {item.number}
                </span>
                <span className="text-lg lg:text-xl text-slate-700 font-semibold mt-1">
                  {item.title}
                </span>
                <p className="text-slate-400 lg:text-lg">{item.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
