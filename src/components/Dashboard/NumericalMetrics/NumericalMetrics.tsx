import { BarChart } from "@components/Dashboard/BarChart/BarChart";
import { LineChart } from "@components/Dashboard/LineChart/LineChart";
import { productionMetricsValueTypes } from "@components/Dashboard/NumericalMetrics/ProductionKPI-slice";
import { PieChart } from "@components/Dashboard/PieChart/PieChart";
import { useAppSelector, useAppDispatch } from "@redux-hooks";
import { modifyData } from "@components/Dashboard/NumericalMetrics/ProductionKPI-slice";
import style from "./NumericalMetrics.module.scss";

export const NumericalMetrics = () => {
  const productionMetricsData = useAppSelector(
    (state) => state.productionKPISlice.productionMetrics
  );
  const dispatch = useAppDispatch();

  const changeValueAccordingToType = (
    value: number,
    type: productionMetricsValueTypes
  ): string | number | undefined => {
    if (type === "number") return value;
    if (type === "currency") return `$${value}K`;
    if (type === "percentage") return `${value}%`;
  };

  return (
    <>
      <div className={style["select"]}>
        <label htmlFor="day">Day Filter</label>
        <select
          name="day"
          id="day"
          onChange={(e) => {
            dispatch(modifyData());
          }}
        >
          <option value="1">Day 1</option>
          <option value="2">Day 2</option>
          <option value="3">Day 3</option>
          <option value="4">Day 4</option>
        </select>
      </div>
      <div className={style["container"]}>
        {productionMetricsData.map(({ title, value, type }, index) => {
          return (
            <div className={style["card"]} key={index}>
              <p>{title}</p>
              <div className={style["value"]}>
                {changeValueAccordingToType(value, type)}
              </div>
            </div>
          );
        })}
      </div>
      <div className={style["chart-container"]}>
        <div className={style["pie-cart"]}>
          <PieChart />
        </div>
        <div className={style["bar-cart"]}>
          <BarChart />
        </div>
        <div className={style["line-cart"]}>
          <LineChart />
        </div>
      </div>
    </>
  );
};
