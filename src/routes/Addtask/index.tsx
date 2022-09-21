import { Icon } from "@iconify/react";
import { SegmentHeader } from "../../components/segments";

export default function Dash() {
  return (
    <div className="lg:size-full flex flex-wrap -mx-2">
      <div className="w-full lg:w-3/4 lg:px-2">
        <div className="bg-white border rounded-xl h-full py-8 px-4">
          <SegmentHeader underlineColor={true}>
            Add Task to Dashboard
          </SegmentHeader>
          <form className="mt-12">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-2">
              <div className="w-full relative border border-slate-400 rounded-lg">
                <label className="absolute -top-4 left-4 bg-white font-medium">
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
                <label className="absolute -top-4 left-4 bg-white font-medium">
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
                  <label className="absolute -top-4 left-4 bg-white font-medium">
                    Start Time
                  </label>
                  <input
                    type="date"
                    className="w-full py-3 px-4 bg-transparent outline-none"
                  />
                </div>
                <div className="w-full relative border border-slate-400 rounded-lg">
                  <label className="absolute -top-4 left-4 bg-white font-medium">
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
                <label className="absolute -top-4 left-4 bg-white font-medium">
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
                <label className="absolute -top-4 left-4 bg-white font-medium">
                  Task Tags
                </label>
                <input
                  type="text"
                  className="w-full py-3 px-4 bg-transparent outline-none"
                  placeholder="emergency, today, school ..."
                />
              </div>
              <div className="w-full relative border border-slate-400 rounded-lg">
                <label className="absolute -top-4 left-4 bg-white font-medium">
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
                <label className="absolute -top-4 left-4 bg-white font-medium">
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
      </div>
      <div className="w-full lg:w-1/4 mt-4 lg:mt-0">
        <div className="bg-white border rounded-xl h-full py-8 px-4">
          <SegmentHeader>Life Time</SegmentHeader>
          <div className="mt-12">
            <div className="flex bg-slate-100 rounded-r-md">
              <div className="bg-red-400 py-3 px-2 flex items-center justify-center rounded-l-md">
                <Icon icon="ph:alarm-duotone" className="text-2xl text-white" />
              </div>
              <div className="ml-2 py-1">
                <span className="block text-slate-500">New Task</span>
                <span className="text-slate-400 text-sm">
                  Created in 2022/6/23 at 12:06:56
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
