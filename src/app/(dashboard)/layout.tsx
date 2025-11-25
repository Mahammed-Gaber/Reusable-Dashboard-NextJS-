import { cookies } from "next/headers";

type DashboardLayoutProps = {
  children: React.ReactNode;
  admin: React.ReactNode;
  provider: React.ReactNode;
};

export default async function DashboardLayout({
  children,
  admin,
  provider,
}: DashboardLayoutProps) {
  const role = (await cookies()).get("role")?.value;
  console.log(role);
  if (role === "admin") {
    return admin;
  }

  if (role === "provider") {
    return provider;
  }

  return children;
}


