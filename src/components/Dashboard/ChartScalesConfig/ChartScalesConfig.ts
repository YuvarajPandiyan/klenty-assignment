export const chartScaleConfig = {
  y: {
    ticks: { color: "#ffffff" },
    grid: {
      color: (context: any) => {
        if (context.index >= 0) return "#808080";
        return "#ffffff";
      },
      lineWidth: (context: any) => {
        if (context.index >= 0) return 1;

        return 3;
      },
    },
  },
  x: {
    ticks: { color: "#ffffff" },
    grid: {
      color: (context: any) => {
        if (context.index === 0) return "#ffffff";

        if (context.index > 0) return "#808080";
      },
      lineWidth: (context: any) => {
        if (context.index === 0) return 3;

        if (context.index > 0) return 1;
      },
    },
  },
};
