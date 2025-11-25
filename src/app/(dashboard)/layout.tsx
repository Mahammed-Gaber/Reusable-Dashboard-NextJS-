// app/(dashboard)/layout.tsx
import { cookies } from "next/headers";
import type { ReactNode } from "react";

export default async function DashboardLayout({
  admin,
  provider,
  children,
}: {
  admin: ReactNode;
  provider: ReactNode;
  children: ReactNode;
}) {
  const role = (await cookies()).get("role")?.value;

  console.log("Dashboard layout role:", role);

  if (role === "admin") {
    return <>{admin}</>;
  }

  if (role === "provider") {
    return <>{provider}</>;
  }

  // لو مفيش role → يرجع الـ landing (children)
  return <>{children}</>;
}