import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { fetchGrapeHubBlogPosts, fetchGrapeHubBlogPost } from "@/services/grapehub/fetchPage";
import styles from "./BlogPost.module.css";
// ── Pre-render all known post slugs at build time ──────────────────────────
export async function generateStaticParams() {
  const posts = await fetchGrapeHubBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ── Per-post dynamic SEO metadata ──────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchGrapeHubBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | BuildNinja Blog",
    };
  }

  const canonicalUrl = `https://buildninja.grapehub.io/blog/${slug}`;

  return {
    title: `${post.title} | BuildNinja Blog`,
    description: post.excerpt || post.title,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: canonicalUrl,
      siteName: "BuildNinja",
      type: "article",
      publishedTime: post.firstPublishedDate,
      authors: post.author ? [post.author] : ["BuildNinja Team"],
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
              width: 1200,
              height: 630,
              alt: "BuildNinja Blog",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: post.coverImage
        ? [post.coverImage]
        : ["https://buildninja.grapehub.io/resources/BuildNinja.png"],
    },
  };
}

// ── Helper ─────────────────────────────────────────────────────────────────
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
        width={36}
        height={36}
        className={styles.authorAvatar}
        unoptimized
      />
    );
  }
  return <span className={styles.authorInitials}>{initials}</span>;
}

// ── Page Component ─────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await fetchGrapeHubBlogPost(slug);

  if (!post) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.notFound}>
          <p className={styles.notFoundTitle}>Post Not Found</p>
          <p className={styles.notFoundText}>
            We couldn&apos;t load this article. It may have been moved or is
            temporarily unavailable.
          </p>
          <Link href="/blog" className={styles.notFoundLink}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Retrieve author avatar from the feed list data
  let authorAvatar = "";
  try {
    const posts = await fetchGrapeHubBlogPosts();
    const matchedPost = posts.find((p) => p.slug === slug);
    if (matchedPost) {
      authorAvatar = matchedPost.authorAvatar;
    }
  } catch (e) {
    console.error("Error retrieving author avatar from feed:", e);
  }

  // Build JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.coverImage || "https://buildninja.grapehub.io/resources/BuildNinja.png",
    author: {
      "@type": "Person",
      name: post.author || "BuildNinja Team",
    },
    publisher: {
      "@type": "Organization",
      name: "BuildNinja",
      logo: {
        "@type": "ImageObject",
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
      },
    },
    datePublished: post.firstPublishedDate,
    dateModified: post.lastPublishedDate || post.firstPublishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://buildninja.grapehub.io/blog/${slug}`,
    },
  };

  return (
    <div className={styles.pageWrapper}>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back navigation */}
      <div className={styles.backBar}>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className={styles.article}>
        {/* Post Header */}
        <header className={styles.postHeader}>
          {/* Meta row: date · read time */}
          <div className={styles.metaRow}>
            {post.date && (
              <>
                <Calendar size={16} className={styles.metaIcon} />
                <span>{post.date}</span>
              </>
            )}
            {post.readTime && (
              <>
                <Clock size={16} className={styles.metaIcon} />
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          <h1 className={styles.postTitle}>{post.title}</h1>

          {/* Author */}
          <div className={styles.authorBlock}>
            <AuthorAvatar author={post.author} avatarUrl={authorAvatar} />
            <div>
              <p className={styles.authorName}>
                {post.author || "BuildNinja Team"}
              </p>
              <p className={styles.authorLabel}>Author</p>
            </div>
          </div>
        </header>

        {/* Body — Wix-scraped HTML rendered safely */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
