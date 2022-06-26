import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export type productionMetricsValueTypes = "percentage" | "currency" | "number";

type ProductionMetrics = {
  title: string;
  value: number;
  type: productionMetricsValueTypes;
  iconType?: string;
};

type PieChartDataType = [number, number, number];

type LineAndBarChartDataType = {
  labels: string[];
  actualProductionCost: number[];
  standardProductionCost: number[];
};

type ProductionKpi = {
  productionMetrics: ProductionMetrics[];
  pieChartData: PieChartDataType;
  barChartData: LineAndBarChartDataType;
  lineChartData: LineAndBarChartDataType;
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const generateProductionMetricsData = (): ProductionMetrics[] => [
  {
    title: "Availability OOE",
    value: faker.datatype.number({ min: 0, max: 10000 }),
    type: "percentage",
  },
  {
    title: "Actual Production Cost",
    value: faker.datatype.float({ min: 0, max: 10000 }),
    type: "currency",
  },
  {
    title: "Production losses",
    value: faker.datatype.float({ min: 0, max: 10000 }),
    type: "currency",
  },
  {
    title: "Number of Days",
    value: faker.datatype.number({ min: 0, max: 10000 }),
    type: "number",
  },
  {
    title: "Units Manufactured",
    value: faker.datatype.number({ min: 0, max: 10000 }),
    type: "number",
  },
  {
    title: "Labour Cost per Unit",
    value: faker.datatype.float({ min: 0, max: 10000 }),
    type: "number",
  },
];

const generatePieChartData = (): PieChartDataType => [
  faker.datatype.number(),
  faker.datatype.number(),
  faker.datatype.number(),
];

const generateBarChartData = (): LineAndBarChartDataType => {
  return {
    labels,
    actualProductionCost: labels.map(() =>
      faker.datatype.number({ max: 100000 })
    ),
    standardProductionCost: labels.map(() =>
      faker.datatype.number({ max: 100000 })
    ),
  };
};

const generateLineChartData = (): LineAndBarChartDataType => {
  return {
    labels,
    actualProductionCost: labels.map(() =>
      faker.datatype.number({ min: -1000, max: 100000 })
    ),
    standardProductionCost: labels.map(() =>
      faker.datatype.number({ min: -1000, max: 100000 })
    ),
  };
};

const initialState: ProductionKpi = {
  productionMetrics: generateProductionMetricsData(),
  pieChartData: generatePieChartData(),
  barChartData: generateBarChartData(),
  lineChartData: generateLineChartData(),
};

const productionKpiSlice = createSlice({
  name: "productionKpi",
  initialState,
  reducers: {
    modifyData(state: ProductionKpi) {
      console.log(
        "🚀 ~ file: ProductionKPI-slice.ts ~ line 105 ~ modifyData ~ state",
        state
      );
      state.productionMetrics = generateProductionMetricsData();
      state.pieChartData = generatePieChartData();
      state.barChartData = generateBarChartData();
      state.lineChartData = generateLineChartData();
    },
  },
});

export const { modifyData } = productionKpiSlice.actions;
export default productionKpiSlice.reducer;
