/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

function StackedColumnChart({ ipmtList, ppmtlist, labels, balanceList }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Yearly Distribution Chart",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      "bar-y-axis": {
        type: "linear",
        position: "right",
        stacked: true,
      },
      "line-y-axis": {
        type: "linear",
        position: "left",
        stacked: false, // Set to false for the line chart's y-axis
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Balance",
        data: balanceList,
        fill: false,
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 1,
        pointBackgroundColor: "blue",
        yAxisID: "line-y-axis",
      },
      {
        type: "bar",
        label: "Principal Paid",
        data: ppmtlist,
        backgroundColor: "rgb(75, 192, 192)",
        yAxisID: "bar-y-axis",
      },
      {
        type: "bar",
        label: "Interest Paid",
        data: ipmtList,
        backgroundColor: "rgb(255, 99, 132)",
        yAxisID: "bar-y-axis",
      },
    ],
  };

  return (
    <div>
      <div>
        <Chart data={data} options={options} />
      </div>
    </div>
  );
}

export default StackedColumnChart;
