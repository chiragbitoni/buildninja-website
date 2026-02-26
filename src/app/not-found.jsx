import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | BuildNinja",
};

export default function NotFound() {
  return (
    <section className="notFoundWrapper">
      <div className="notFoundContent">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="notFoundActions">
          <Link href="/">Go Home</Link>
          <Link href="/pricing">View Pricing</Link>
        </div>
      </div>
    </section>
  );
}