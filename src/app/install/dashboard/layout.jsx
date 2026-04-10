export const metadata = {
  title: { absolute: "CI/CD Dashboard | BuildNinja Installation Setup" },
  description: "Access your BuildNinja installation dashboard to configure, manage, and monitor your secure self-hosted CI/CD build environments.",
  keywords: ["BuildNinja dashboard", "CI/CD environment setup", "manage DevOps pipeline", "self-hosted CI/CD configuration"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/install/dashboard",
  },
};

export default function DashboardLayout({ children }) {
  return <>{children}</>;
}
