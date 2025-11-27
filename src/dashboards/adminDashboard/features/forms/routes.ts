import type { DashboardRoutes } from "@/dashboards/routes/types";

export const formsFeatureRoutes: DashboardRoutes = {
  "/form-elements": () => import("./pages/FormElementsPage"),
};

