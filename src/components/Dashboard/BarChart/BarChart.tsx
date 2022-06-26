import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartScaleConfig } from "@components/Dashboard/ChartScalesConfig/ChartScalesConfig";
import { useAppSelector } from "@redux-hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  color: "#ffffff",
  borderColor: "#ffffff",
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: chartScaleConfig,
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

export const BarChart = () => {
  const { labels, actualProductionCost, standardProductionCost } =
    useAppSelector((state) => state.productionKPISlice.barChartData);
  const data = {
    labels,
    datasets: [
      {
        label: "Actual Production Cost",
        data: actualProductionCost,
        borderColor: "rgb(0, 251, 255, 0.5)",
        backgroundColor: "rgba(0, 251, 255)",
      },
      {
        label: "Standard Production Cost",
        data: standardProductionCost,
        borderColor: "rgb(255, 201, 5, 0.5)",
        backgroundColor: "rgba(255, 201, 5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
