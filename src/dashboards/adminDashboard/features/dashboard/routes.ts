import type { DashboardRoutes } from "@/dashboards/routes/types";

export const dashboardFeatureRoutes: DashboardRoutes = {
  "/": () => import("./pages/DashboardHomePage"),
  "/blank": () => import("./pages/DashboardBlankPage"),
};

