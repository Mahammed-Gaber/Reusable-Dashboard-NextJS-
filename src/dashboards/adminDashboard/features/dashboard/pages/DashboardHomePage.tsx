import React from "react";
import {
  DashboardGrid,
  DashboardHero,
  DemographicsColumn,
  OrdersColumn,
  PrimaryMetricsColumn,
  SecondaryMetricsColumn,
  StatisticsRow,
} from "../components";
import { getDashboardHero } from "../services/dashboardService";

export default function DashboardHomePage() {
  const hero = getDashboardHero();

  return (
    <DashboardGrid>
      <DashboardHero {...hero} />
      <PrimaryMetricsColumn />
      <SecondaryMetricsColumn />
      <StatisticsRow />
      <DemographicsColumn />
      <OrdersColumn />
    </DashboardGrid>
  );
}
