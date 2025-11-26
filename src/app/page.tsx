// app/page.tsx
import { cookies } from "next/headers";
import MarketingLayout from "./(marketing)/layout";
import MarketingPage from "./(marketing)/page";

import AdminLayout from "./(dashboard)/admin/layout";
import AdminHome from "./(dashboard)/admin/page";

import ProviderLayout from "./(dashboard)/provider/layout";
import ProviderHome from "./(dashboard)/provider/page";

export default async function RootPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value ?? "demo-token";
  const role = cookieStore.get("role")?.value ?? "admin";

  if (!token) {
    return (
      <MarketingLayout>
        <MarketingPage />
      </MarketingLayout>
    );
  }

  if (role === "admin") {
    return (
      <AdminLayout>
        <AdminHome />
      </AdminLayout>
    );
  }

  if (role === "provider") {
    return (
      <ProviderLayout>
        <ProviderHome />
      </ProviderLayout>
    );
  }

  return (
    <MarketingLayout>
      <MarketingPage />
    </MarketingLayout>
  );
}