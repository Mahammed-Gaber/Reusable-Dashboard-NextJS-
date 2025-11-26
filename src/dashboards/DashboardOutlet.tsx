"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { adminRoutes } from "./routes/adminRoutes";
import { providerRoutes } from "./routes/providerRoutes";
import type { DashboardRoutes } from "./routes/types";

type DashboardRole = "admin" | "provider";

const roleRoutes: Record<DashboardRole, DashboardRoutes> = {
  admin: adminRoutes,
  provider: providerRoutes,
};

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  const withoutDashboard = pathname.replace(/^\/dashboard/, "") || "/";
  return withoutDashboard.startsWith("/")
    ? withoutDashboard
    : `/${withoutDashboard}`;
};

type DashboardOutletProps = {
  role: DashboardRole;
  slug?: string[];
};

const pathFromSlug = (slug?: string[]) => {
  if (!slug || slug.length === 0) {
    return "/";
  }
  return `/${slug.join("/")}`;
};

export default function DashboardOutlet({ role, slug }: DashboardOutletProps) {
  const pathname = usePathname();
  const normalizedPath =
    slug && slug.length > 0 ? pathFromSlug(slug) : normalizePath(pathname);
  const routes = roleRoutes[role] ?? roleRoutes.admin;
  const loader = routes[normalizedPath] ?? routes["/"];

  const Page = useMemo(
    () =>
      dynamic(loader, {
        loading: () => (
          <p className="text-sm text-gray-500">جاري التحميل...</p>
        ),
        ssr: false,
      }),
    [loader]
  );

  return <Page />;
}





