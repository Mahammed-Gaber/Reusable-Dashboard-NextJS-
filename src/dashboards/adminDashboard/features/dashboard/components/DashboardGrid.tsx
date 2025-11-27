import React from "react";

type DashboardGridProps = {
  children: React.ReactNode;
};

export function DashboardGrid({ children }: DashboardGridProps) {
  return <div className="grid grid-cols-12 gap-4 md:gap-6">{children}</div>;
}

