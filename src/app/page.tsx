import LandingPage from "./(marketing)/page";
import DashboardLayout from "./(dashboard)/layout";
import AdminLayout from "./(dashboard)/@admin/layout";
import AdminPage from "./(dashboard)/@admin/page";
import ProviderLayout from "./(dashboard)/@provider/layout";
import ProviderPage from "./(dashboard)/@provider/page";

export default function Home() {
  return (
    <DashboardLayout
      admin={
        <AdminLayout>
          <AdminPage />
        </AdminLayout>
      }
      provider={
        <ProviderLayout>
          <ProviderPage />
        </ProviderLayout>
      }
    >
      <LandingPage />
    </DashboardLayout>
  );
}