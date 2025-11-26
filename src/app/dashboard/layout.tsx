import DashboardLayout from "@/dashboards/layout/DashboardLayout";

export default function DashboardRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout >{children}</DashboardLayout>;
}

