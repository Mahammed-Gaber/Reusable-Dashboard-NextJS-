import type { DashboardRoutes } from "./types";

export const adminRoutes: DashboardRoutes = {
  "/": () => import("@/dashboards/adminDashboard/page"),
  "/calendar": () =>
    import("@/dashboards/adminDashboard/others-pages/calendar/page"),
  "/profile": () =>
    import("@/dashboards/adminDashboard/others-pages/profile/page"),
  "/form-elements": () =>
    import(
      "@/dashboards/adminDashboard/others-pages/forms/form-elements/page"
    ),
  "/basic-tables": () =>
    import(
      "@/dashboards/adminDashboard/others-pages/tables/basic-tables/page"
    ),
  "/blank": () =>
    import("@/dashboards/adminDashboard/others-pages/blank/page"),
  "/line-chart": () =>
    import("@/dashboards/adminDashboard/others-pages/chart/line-chart/page"),
  "/bar-chart": () =>
    import("@/dashboards/adminDashboard/others-pages/chart/bar-chart/page"),
  "/alerts": () =>
    import("@/dashboards/adminDashboard/ui-elements/alerts/page"),
  "/avatars": () =>
    import("@/dashboards/adminDashboard/ui-elements/avatars/page"),
  "/badge": () =>
    import("@/dashboards/adminDashboard/ui-elements/badge/page"),
  "/buttons": () =>
    import("@/dashboards/adminDashboard/ui-elements/buttons/page"),
  "/images": () =>
    import("@/dashboards/adminDashboard/ui-elements/images/page"),
  "/videos": () =>
    import("@/dashboards/adminDashboard/ui-elements/videos/page"),
  "/modals": () =>
    import("@/dashboards/adminDashboard/ui-elements/modals/page"),
  "/error-404": () => import("@/dashboards/shared/Error404Page"),
};

