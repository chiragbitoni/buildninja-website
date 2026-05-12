import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Dashboard | BuildNinja",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://buildninja.grapehub.io/install/dashboard",
  },
};

export default function Dashboard() {
  return <DashboardClient />;
}
