import type { DashboardRoutes } from "@/dashboards/routes/types";

export const chartsFeatureRoutes: DashboardRoutes = {
  "/line-chart": () => import("./pages/LineChartPage"),
  "/bar-chart": () => import("./pages/BarChartPage"),
};

