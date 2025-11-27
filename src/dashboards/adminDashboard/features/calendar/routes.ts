import type { DashboardRoutes } from "@/dashboards/routes/types";

export const calendarFeatureRoutes: DashboardRoutes = {
  "/calendar": () => import("./pages/CalendarPage"),
};

