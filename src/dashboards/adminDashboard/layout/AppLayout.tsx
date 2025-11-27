"use client";

import DashboardLayout from "@/dashboards/layout/DashboardLayout";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

