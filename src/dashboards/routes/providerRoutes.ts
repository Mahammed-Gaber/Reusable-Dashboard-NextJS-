import type { DashboardRoutes } from "./types";

export const providerRoutes: DashboardRoutes = {
  "/": () => import("@/dashboards/providerDashboard/page"),
  "/calendar": () =>
    import("@/dashboards/providerDashboard/others-pages/calendar/page"),
  "/profile": () =>
    import("@/dashboards/providerDashboard/others-pages/profile/page"),
  "/form-elements": () =>
    import(
      "@/dashboards/providerDashboard/others-pages/forms/form-elements/page"
    ),
  "/basic-tables": () =>
    import(
      "@/dashboards/providerDashboard/others-pages/tables/basic-tables/page"
    ),
  "/blank": () =>
    import("@/dashboards/providerDashboard/others-pages/blank/page"),
  "/line-chart": () =>
    import("@/dashboards/providerDashboard/others-pages/chart/line-chart/page"),
  "/bar-chart": () =>
    import("@/dashboards/providerDashboard/others-pages/chart/bar-chart/page"),
  "/alerts": () =>
    import("@/dashboards/providerDashboard/ui-elements/alerts/page"),
  "/avatars": () =>
    import("@/dashboards/providerDashboard/ui-elements/avatars/page"),
  "/badge": () =>
    import("@/dashboards/providerDashboard/ui-elements/badge/page"),
  "/buttons": () =>
    import("@/dashboards/providerDashboard/ui-elements/buttons/page"),
  "/images": () =>
    import("@/dashboards/providerDashboard/ui-elements/images/page"),
  "/videos": () =>
    import("@/dashboards/providerDashboard/ui-elements/videos/page"),
  "/modals": () =>
    import("@/dashboards/providerDashboard/ui-elements/modals/page"),
  "/error-404": () => import("@/dashboards/shared/Error404Page"),
};

