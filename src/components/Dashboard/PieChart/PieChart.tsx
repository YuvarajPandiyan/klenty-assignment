import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppSelector } from "@redux-hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  //   scales: chartScaleConfig,
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
      text: "Labor Cost",
      color: "#ffffff",
    },
  },
};

export const PieChart = () => {
  const pieChartData = useAppSelector(
    (state) => state.productionKPISlice.pieChartData
  );

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: pieChartData,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie options={options} data={data} />;
};
