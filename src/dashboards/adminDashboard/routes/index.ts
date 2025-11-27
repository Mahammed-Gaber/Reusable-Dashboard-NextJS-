import type { DashboardRoutes } from "@/dashboards/routes/types";
import { calendarFeatureRoutes } from "../features/calendar/routes";
import { chartsFeatureRoutes } from "../features/charts/routes";
import { dashboardFeatureRoutes } from "../features/dashboard/routes";
import { formsFeatureRoutes } from "../features/forms/routes";
import { profileFeatureRoutes } from "../features/profile/routes";
import { tablesFeatureRoutes } from "../features/tables/routes";
import { uiElementsFeatureRoutes } from "../features/uiElements/routes";

export const adminFeatureRoutes: DashboardRoutes = {
  ...dashboardFeatureRoutes,
  ...calendarFeatureRoutes,
  ...profileFeatureRoutes,
  ...formsFeatureRoutes,
  ...tablesFeatureRoutes,
  ...chartsFeatureRoutes,
  ...uiElementsFeatureRoutes,
};

