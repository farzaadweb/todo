import { Icon } from "@iconify/react";
import { SegmentHeader } from "../../components/segments";

export default function Dash() {
  return (
    <div className="lg:size-full relative">
      <div className="w-full">
        <SegmentHeader underlineColor={true}>
          Add Task to Dashboard
        </SegmentHeader>
        <form className="mt-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-2">
            <div className="w-full relative border border-slate-400 rounded-lg">
              <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                Select a Group<b className="text-red-400">*</b>
              </label>
              <select
                name=""
                id=""
                className="w-full py-3 px-4 bg-transparent text-slate-400"
              >
                <option value="" hidden selected disabled>
                  Select your task categories
                </option>
                <option value="text">text</option>
              </select>
            </div>
            <div className="w-full relative border border-slate-400 rounded-lg">
              <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                Task Title<b className="text-red-400">*</b>
              </label>
              <input
                type="text"
                className="w-full py-3 px-4 bg-transparent outline-none"
                placeholder="Enter your task title"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-full relative border border-slate-400 rounded-lg">
                <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                  Start Time
                </label>
                <input
                  type="date"
                  className="w-full py-3 px-4 bg-transparent outline-none"
                />
              </div>
              <div className="w-full relative border border-slate-400 rounded-lg">
                <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                  Finish Time
                </label>
                <input
                  type="date"
                  className="w-full py-3 px-4 bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-2 mt-8">
            <div className="w-full relative border border-slate-400 rounded-lg">
              <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                Emergency Level<b className="text-red-400">*</b>
              </label>
              <select
                name=""
                id=""
                className="w-full py-3 px-4 bg-transparent text-slate-400"
              >
                <option value="" hidden selected disabled>
                  How much your task is emergency?
                </option>
                <option value="text">text</option>
              </select>
            </div>
            <div className="w-full relative border border-slate-400 rounded-lg">
              <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                Task Tags
              </label>
              <input
                type="text"
                className="w-full py-3 px-4 bg-transparent outline-none"
                placeholder="emergency, today, school ..."
              />
            </div>
            <div className="w-full relative border border-slate-400 rounded-lg">
              <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                Task Color
              </label>
              <input
                type="color"
                className="w-full py-3 px-4 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="w-full relative border border-slate-400 rounded-lg">
              <label className="absolute -top-4 left-4 bg-slate-100 font-medium">
                Task Description
              </label>
              <textarea
                className="w-full py-3 px-4 bg-transparent outline-none"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <details className="border-b pb-4">
              <summary>Set Timer</summary>
              <p>They will add</p>
            </details>
            <details className="mt-4 border-b pb-4">
              <summary>Additional</summary>
              <p>They will add</p>
            </details>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-white font-medium bg-green-600"
            >
              Add Task
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-zinc-800 border border-red-600 font-medium ml-2"
            >
              Reset Boxs
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-14 hidden lg:block border-t bg-slate-100 py-3 px-4 absolute left-0 bottom-0">
        <div className="w-fit flex bg-white border rounded-r-md">
          <div className="bg-red-400 py-3 px-2 flex items-center justify-center rounded-l-md">
            <Icon icon="ph:alarm-duotone" className="text-xl text-white" />
          </div>
          <div className="py-1 pl-2 pr-4">
            <span className="block text-slate-500 text-sm">New Task</span>
            <span className="text-slate-400 text-xs">
              Created in 2022/6/23 at 12:06:56
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
