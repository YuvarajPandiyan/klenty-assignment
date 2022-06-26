import { Header } from "@components/Dashboard/Header/Header";
import { NumericalMetrics } from '@components/Dashboard/NumericalMetrics/NumericalMetrics'
import style from "./DashboardContainer.module.scss";
export const Dashboard = () => (
  <section className={style["container"]}>
    <Header />
    <NumericalMetrics />
  </section>
);
