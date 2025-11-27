import type { DashboardRoutes } from "@/dashboards/routes/types";

export const tablesFeatureRoutes: DashboardRoutes = {
  "/basic-tables": () => import("./pages/BasicTablesPage"),
};

