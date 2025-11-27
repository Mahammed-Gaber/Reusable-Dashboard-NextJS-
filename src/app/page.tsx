// app/page.tsx
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MarketingLayout from "./(marketing)/layout";
import MarketingPage from "./(marketing)/page";

export default function RootPage() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value ?? "undefined";
//   const role = cookieStore.get("role")?.value ?? "admin";
  const token = null;
  const role = null;

  if (token && role) {
    redirect("/dashboard");
  }

  if (token && !role) {
    redirect("/login");
  }

  return (
    <MarketingLayout>
      <MarketingPage />
    </MarketingLayout>
  );
}