import DashboardOutlet from "@/dashboards/DashboardOutlet";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type DashboardSlugPageProps = {
  params: {
    slug?: string[];
  };
};

const resolveRole = (value?: string | null): "admin" | "provider" =>
  value === "provider" ? "provider" : "admin";

export default async function DashboardSlugPage({ params }: DashboardSlugPageProps) {
    const { slug } = await params;
  
    // const cookieStore = await cookies();
    // const token = cookieStore.get("token")?.value;
    // const roleCookie = cookieStore.get("role")?.value;
    // const cookieStore = await cookies();
    const token = "demo-token";
    const roleCookie = "provider";
  
    if (!token) redirect("/");
    if (!roleCookie) redirect("/login");
  
    return <DashboardOutlet role={resolveRole(roleCookie)} slug={slug} />;
  }

