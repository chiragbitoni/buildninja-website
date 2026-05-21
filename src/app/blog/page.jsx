import Image from "next/image";
import Link from "next/link";
import { fetchGrapeHubBlogPosts } from "@/services/grapehub/fetchPage";
import styles from "./BlogPage.module.css";
import NetworkBackground from "@/components/ui/NetworkBackground";
import { Calendar, Clock } from "lucide-react";

export const revalidate = 86400; // ISR: re-fetch at most once every 24h

export const metadata = {
  title: "Blog | BuildNinja – CI/CD Insights & DevOps Tutorials",
  description:
    "Explore the latest articles, tutorials, and insights from the BuildNinja team — covering CI/CD pipelines, self-hosted DevOps, and software delivery best practices.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/blog",
  },
  openGraph: {
    title: "Blog | BuildNinja – CI/CD Insights & DevOps Tutorials",
    description:
      "Explore the latest articles, tutorials, and insights from the BuildNinja team — covering CI/CD pipelines, self-hosted DevOps, and software delivery best practices.",
    url: "https://buildninja.grapehub.io/blog",
    siteName: "BuildNinja",
    type: "website",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja Blog",
      },
    ],
  },
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function AuthorAvatar({ author, avatarUrl }) {
  const initials = author
    ? author
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
    : "BN";

  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={author || "Author"}
        width={28}
        height={28}
        className={styles.authorAvatar}
        unoptimized
      />
    );
  }
  return <span className={styles.authorInitials}>{initials}</span>;
}

export default async function BlogPage() {
  const posts = await fetchGrapeHubBlogPosts();

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <NetworkBackground />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
        <div className={styles.bottomFade} />

        <div className={styles.inner}>
          <div className={styles.badge}>📰 BuildNinja Blog</div>
          <h1 className={styles.heading}>
            CI/CD Insights &<br />
            <span>DevOps Intelligence</span>
          </h1>
          <p className={styles.description}>
            Deep dives, tutorials, and real-world stories from the BuildNinja
            engineering team. Stay ahead of the curve in modern software
            delivery.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={styles.blogSection}>
        <div className={styles.blogGrid}>
          {posts.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyStateTitle}>No posts found</p>
              <p>Check back soon for the latest BuildNinja articles.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.id || post.slug}
                href={`/blog/${post.slug}`}
                className={styles.blogCard}
              >
                {/* Cover Image */}
                {post.coverImage && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={post.coverImage}
                      alt={post.title || "Blog post cover"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className={styles.coverImage}
                      unoptimized
                    />
                  </div>
                )}

                {/* Card Body */}
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    {post.firstPublishedDate && (
                      <span className={styles.cardMetaItem}>
                        <Calendar /> {formatDate(post.firstPublishedDate)}
                      </span>
                    )}
                    {post.minutesToRead && (
                      <>
                        <span className={styles.cardMetaDivider} />
                        <span className={styles.cardMetaItem}>
                          <Clock /> {post.minutesToRead} min read
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className={styles.cardTitle}>{post.title}</h2>

                  {post.excerpt && (
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  )}

                  <div className={styles.cardFooter}>
                    <div className={styles.authorBlock}>
                      <AuthorAvatar
                        author={post.author}
                        avatarUrl={post.authorAvatar}
                      />
                      <span className={styles.authorName}>
                        {post.author || "BuildNinja Team"}
                      </span>
                    </div>
                    <span className={styles.readMore}>
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
