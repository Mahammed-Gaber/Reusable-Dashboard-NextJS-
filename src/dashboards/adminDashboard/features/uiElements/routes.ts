import type { DashboardRoutes } from "@/dashboards/routes/types";

export const uiElementsFeatureRoutes: DashboardRoutes = {
  "/alerts": () => import("./pages/AlertsPage"),
  "/avatars": () => import("./pages/AvatarsPage"),
  "/badge": () => import("./pages/BadgePage"),
  "/buttons": () => import("./pages/ButtonsPage"),
  "/images": () => import("./pages/ImagesPage"),
  "/videos": () => import("./pages/VideosPage"),
  "/modals": () => import("./pages/ModalsPage"),
};

