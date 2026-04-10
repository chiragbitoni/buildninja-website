export const metadata = {
  title: { absolute: "Interactive CI/CD Sandbox Environment | BuildNinja Dojo" },
  description: "Test BuildNinja's CI/CD pipeline capabilities live in your browser. Our interactive Sandbox Dojo lets you experience seamless DevOps automation with zero setup required.",
  keywords: ["CI/CD sandbox", "DevOps simulator", "interactive CI/CD deployment", "test BuildNinja online", "CI/CD testing environment", "browser CI/CD"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/dojo",
  },
};

export default function DojoLayout({ children }) {
  return <>{children}</>;
}
