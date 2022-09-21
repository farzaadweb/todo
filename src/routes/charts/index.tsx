import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts() {
  let [totalChart, setTotalChart]: any = useState({
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
      },
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: {
      labels: "hello",
      datasets: [
        {
          label: "Dataset 1",
          data: [52, 56, 35, 6, 21],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: [12, 26, 65, 8, 51],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
  });
  return (
    <div className="lg:size-full bg-white rounded-lg border px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-2 overflow-x-auto">
        <div className="w-full">
          <Line options={totalChart.options} data={totalChart.data} />
        </div>
        <div className="w-full">
          <Line options={totalChart.options} data={totalChart.data} />
        </div>
        <div className="w-full">
          <Line options={totalChart.options} data={totalChart.data} />
        </div>
        <div className="w-full">
          <Line options={totalChart.options} data={totalChart.data} />
        </div>
      </div>
    </div>
  );
}
