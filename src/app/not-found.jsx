import Link from "next/link";
import styles from "./NotFound.module.css";
export const metadata = {
  title: { absolute: "404 - Page Not Found | BuildNinja CI/CD" },
  description: "The page you are looking for does not exist on BuildNinja. Explore our DevOps platform, CI/CD tools, or return to the homepage to automate your CI/CD pipelines.",
  keywords: ["404", "page not found", "BuildNinja error", "DevOps resources", "CI/CD platform"],
};

export default function NotFound() {
  return (
    <section className={styles.notFoundWrapper}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <h4>Page Not Found</h4>
        <p>
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className={styles.notFoundActions}>
          <Link href="/">Go Home</Link>
          <Link href="/pricing">View Pricing</Link>
        </div>
      </div>
    </section>
  );
}