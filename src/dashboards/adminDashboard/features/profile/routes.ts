import type { DashboardRoutes } from "@/dashboards/routes/types";

export const profileFeatureRoutes: DashboardRoutes = {
  "/profile": () => import("./pages/ProfileOverviewPage"),
};

