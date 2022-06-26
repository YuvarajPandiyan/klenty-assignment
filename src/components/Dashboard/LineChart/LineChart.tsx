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
import { chartScaleConfig } from "@components/Dashboard/ChartScalesConfig/ChartScalesConfig";
import { useAppSelector } from "@redux-hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  color: "#ffffff",
  borderColor: "#ffffff",
  responsive: true,
  scales: {
    ...chartScaleConfig,
    y: {
      ticks: { color: "#ffffff" },
      grid: {
        color: (context: any) => {
          if (context.tick.value === 0) return "#ffffff";
          if (context.index === 0) return "#ffffff";
          if (context.index > 0) return "#808080";
        },
        lineWidth: (context: any) => {
          if (context.tick.value === 0) return 3;
          if (context.index === 0) return 3;
          if (context.index > 0) return 1;
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: "Production Cost Variance",
      color: "#ffffff",
    },
  },
};

export const LineChart = () => {
  const { labels, actualProductionCost, standardProductionCost } =
    useAppSelector((state) => state.productionKPISlice.lineChartData);

  const data = {
    labels,
    datasets: [
      {
        label: "Actual Production Cost",
        data: actualProductionCost,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Standard Production Cost",
        data: standardProductionCost,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};
