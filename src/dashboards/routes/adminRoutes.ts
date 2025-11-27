import { adminFeatureRoutes } from "@/dashboards/adminDashboard/routes";
import type { DashboardRoutes } from "./types";

export const adminRoutes: DashboardRoutes = {
  ...adminFeatureRoutes,
  "/error-404": () => import("@/dashboards/shared/Error404Page"),
};

