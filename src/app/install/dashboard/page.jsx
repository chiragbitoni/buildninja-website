import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Dashboard | BuildNinja",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Dashboard() {
  return <DashboardClient />;
}
