import Link from "next/link";
import styles from "./NotFound.module.css";
export const metadata = {
  title: "404 - Page Not Found | BuildNinja",
};

export default function NotFound() {
  return (
    <section className={styles.notFoundWrapper}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
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