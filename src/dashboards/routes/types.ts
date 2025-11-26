import type { ComponentType } from "react";

export type RouteLoader = () => Promise<{ default: ComponentType<unknown> }>;

export type DashboardRoutes = Record<string, RouteLoader>;

