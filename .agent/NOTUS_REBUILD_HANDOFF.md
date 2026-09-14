# Notus redesign requirements

Prepared 2026-09-14 for the `kenzoAI-redesign` branch created from production `main` at `529f67c`.

## User decisions

- Use `.agent/reference/notus-reference.html` for the global visual theme and typography. Do not use its section composition or layout where that differs from the website reference.
- Apply Notus's canvas/background, section palette, neutral contrast, and design language across the entire website, in both light and dark themes. Use `#ff4172` for the marketing accent.
- Use `#ff4172` as BuildNinja's global marketing accent, overriding Notus coral.
- Do not add play/pause/replay controls to animations.
- Preserve the reference site's animation timing, scroll behavior, and graphics exactly. Continue to respect reduced-motion and page visibility where the reference already does.
- Styling for repeated elements must be centralized: one global H1 style must change every marketing H1, and the same for repeated elements/components.
- Preserve production functionality, route behavior and SEO. Reuse the clear page/section organization from `dev` where possible, while implementing on this branch from `main`.
- Strict rule across the entire website: every page's section order and placement, all content/copy, layout and responsive composition, graphics, and animation must match the rendered `.reference/buildninja_kenzowebsite` site exactly. Do not paraphrase, omit, invent, rearrange, or approximate them. Notus supplies global page/section background colors, theme palette/design language, and typography. Production `main` supplies working behavior, routes, and SEO.
- Existing production sections may be replaced when they do not match the reference. Reuse the exact reference components and artwork; do not create approximate replacement graphics or copy.
- `.reference` is temporary and will be deleted when implementation is done. Copy required source, data, styles, and assets into normal application-owned locations first; no build/runtime import may point into `.reference`.
- New application files must use normal product-oriented names, not names such as `Reference*` or names that expose the source project. Keep the app's JavaScript/JSX conventions; run the production build's type check and resolve any TypeScript diagnostics.
- Keep work incremental, page/section scoped, and record decisions and validation here or in the redesign tracker.

## Notus measurements

Source of truth: `.agent/reference/notus-reference.html`; measured details: `.agent/reference/SECTION_GRAMMAR.md`.

- Inter Display for display text; DM Mono for labels/code; neutral sans for body/UI.
- White light canvas, black dark canvas; neutral foregrounds and muted text.
- `#eaedf1` light structural rules; `#262626` dark structural rules.
- Notus type families, type scale, theme colors, and accent treatment apply globally. Reference page composition, spacing, and responsive layout take precedence over Notus section geometry.
- Reference accent is overridden by user choice `#ff4172`.
- Apply Notus typography, full-site background/section palette, and theme without changing the reference's grids, spacing, graphics, or layout.
- Global theme/type/layout/control tokens should be the sole source for repeated visual values. Page styles define composition/artwork; only explicit shared variants may create real semantic differences. Do not let CSS Modules or inline styles duplicate shared typography/control rules.

## Motion

- No visible pause/play/replay controls. Preserve the reference's animation behavior and timing.
- Timed playback runs only while the relevant reference scene is in view, the browser tab is active, and reduced motion is not requested.
- Reduced motion presents a meaningful static state. Manual selection/navigation remains usable.
- Keep timers/state with the demo and avoid rerendering the whole page. Preserve tab mount/unmount behavior unless explicitly changed.
- Do not replace the reference's animation implementation with approximations or a different animation system.

## Production behavior and SEO to protect

Branch from main is the production baseline; inspect current route source before changing it.

- Authentication/account links, existing routes, navbar/dropdowns, responsive menu, focus/Escape behavior, theme toggle, cookies/storage and video popup.
- Contact, support, landing and partner forms: validation, CAPTCHA, email/API contracts, success/error states, UTM capture and tracking.
- Install: installer versions/URLs, email gate, cached identity, download API, Docker commands/copy behavior and install funnel analytics.
- Pricing: live plan data and IDs, billing/entitlements and purchase/account destinations. Do not replace live data with invented plans.
- Dojo: sandbox URL and session behavior, banner visibility/dismissal and analytics.
- Blog: fetched feed/slugs, static params, post rendering and fallback.
- Preserve/correct route metadata, canonical/OG/Twitter, verification, JSON-LD, sitemap/robots, static export and documentation links.
- Keep internal release/resource route behavior aligned with the production branch unless the user asks to retire them.
- Keep complete product facts and legal wording from the reference copy. Spell the hosted service `kenzoAI`; BuildNinja is the product, while kenzoAI powers supported hosted AI features. Growth and Shogun are BuildNinja editions; AI credits are a separate prepaid add-on. Keep external destinations configurable.
- No em dashes in website copy. Use installed icon libraries (Lucide preferred), with product/provider marks as brand assets.

## Initial findings

- Production `main` is on `kenzoAI-redesign`, based at `529f67c`.
- The latest user-provided `.reference/buildninja_kenzowebsite` is untracked and must be preserved. It is the source of truth for website content, page purpose and composition; `.agent/reference/notus-reference.html` is the separate visual source of truth.
- `.reference/buildninja_kenzowebsite` is temporary and will be deleted. Before it is removed, copy the exact reference components, styles, data, and required assets into application-owned source paths. No production build or runtime import may depend on `.reference`.
- The exact Notus HTML and section grammar files were recovered into `.agent/reference` from the prior redesign branch for this implementation.
- Production currently has a large global CSS file with a dark root palette, `Syne` decorative font, a 1500px layout width, and locally styled page/module headings. These need migration to shared Notus tokens and repeated component styles.
- Root layout mounts theme handling, analytics, auth, navbar/footer, and a global `<main>`. Some routes also mount their own `<main>`; keep one main landmark per rendered page as page scopes are migrated.
- Motion should be simplified as described above, not replaced with a global pause button.

## Execution / validation

1. Build shared theme, typography, width, spacing, section, divider, control and focus styles from Notus. Make them the only source of shared visual values.
2. Rework shared chrome and every page to match the rendered website reference exactly. Preserve production behavior/routes/SEO; do not add animation controls.
3. Verify every completed page against the reference before moving to the next page.
4. Remove dead duplicate code and animation machinery only after usage checks.
5. Validate each changed scope with build/static export, desktop/mobile layout, console, keyboard/focus, reduced motion, route/functionality and SEO/schema checks. Mark unverified checks NOT TESTED. Do not submit real production forms or purchases for visual validation.

The previous checkout did not include the Notus capture; it was restored narrowly from `redesign-section-grammar`. No prior branch reset/cleanup was run in this checkout. User-owned `.reference` content remains untouched.

## Implementation status — 2026-09-14

- The production shell now renders the product-owned `MarketingSite` pages and assets. A source scan found no runtime or build imports into `.reference` and no source-project name in app code.
- Shared Notus theme variables and the `#ff4172` accent are wired globally. Shared H1/H2/H3 rules live in `src/app/globals.css`, so a change to the common rule propagates across rendered routes. Display headings now prefer Inter Display; body/UI use Notus's neutral sans stack; code and labels use DM Mono.
- The homepage was smoke-checked in the browser: its rendered section order follows the list below and the interactive tour is present. The blog index was smoke-checked with the live feed (10 posts), plus its featured story and closing CTA.
- Pricing still reads live plans/IDs; install still reads current installer data and retains its download flow; contact/support/partners retain their production form handlers. These were reviewed/smoke-checked without submitting any form or purchase.
- Animation playback remains scene-scoped and view-aware. Hidden-tab and reduced-motion suspension remain in place. Removed the unused no-op controls component and restart hook; no user-facing pause/play/replay control is rendered.
- A prior `npm run build` passed and exported 41 pages; the sitemap step fetched 10 live blog posts. The static outputs were checked for titles, canonical/Open Graph metadata, and JSON-LD; `/landing-page` remained `noindex` and omitted from the sitemap. A later browser title audit found and fixed duplicated product suffixes on branded page routes. A full export after those fixes remains unverified due the worker allocation failure noted below. The standalone `public/event-slides/index.html` is outside the app route/SEO set.
- Side-by-side browser accessibility-tree checks confirm the same heading order on every audited marketing/legal route. A rendered text comparison also matches all page copy except the documented live-feed, production-form/download, and user-requested animation-control differences below.
- Desktop screenshots were visually compared at the first viewport for all 27 marketing/legal routes. The major section compositions line up; colors/type differ as intended under the global theme. Full-page and responsive pixel parity for every route is not yet confirmed.
- After the latest edits, the `localhost:3000` preview returned HTTP 404 for `/install` and `/features`, although both route files and the current dev app-path manifest list them. The earlier full route sweep returned 200 for these pages; no route-source change was made based on this inconsistent preview response.
- Removed animation buttons had also removed their scene captions. The three captions (“Illustrated build workflow,” “Illustrated AI investigation,” and “Illustrated repository-to-agent routing”) are now restored with the original spacing, while no pause/play/replay controls are present. The Features page's rendered copy now matches the source; the homepage text differs only by the intentionally omitted “Pause tour” button.
- Remaining rendered-copy differences are bounded: `/blog` uses the current live feed rather than the older source snapshot; `/install` keeps the production server/agent download buttons and their email-gated API flow rather than the source's single “Open Linux/macOS downloads” link; `/contact`, `/support`, and `/partners` keep production form submission, CAPTCHA, phone validation, and analytics behavior, so their visible submit/help text and (for partners) required phone field differ from the snapshot form. These are production-functionality exceptions to the strict visual/content match and should be reviewed with the user before removing or replacing those flows.
- The install cards now include their missing monitor/server artwork, while retaining the production download APIs and email gate.
- The Blog index keeps the production live feed and its route behavior. Its section order matches the source, but the feed is now newer: the app shows 10 posts led by an 8 September 2026 article, while the source preview shows 9 posts led by a 1 September article. This is a live-content vs exact-snapshot conflict; leave the feed live unless the user asks to freeze the reference snapshot.
- A route-title check found that several production page titles already containing `BuildNinja` were receiving a second brand suffix from the root title template. Those page titles now use absolute metadata, preserving their original SEO titles and other metadata. The dev server confirms clean titles on About, Blog, Contact, Pricing, Partners, Install, Support, Compare, and the noindex landing page; catch-all titles were already normalized.
- Latest `npx tsc --noEmit` passes. The latest two `npm run build` attempts compiled successfully but Next's TypeScript worker failed during its type-check phase with host allocation errors (`heap arena` / `VirtualAlloc`). A previous full build passed before the metadata edits; retry the production build when more host memory is available. The current static export is not verified after the latest metadata changes.
- The Dojo hero now opens the configured `NEXT_PUBLIC_DOJO_URL` in a new tab and keeps the `hero_dojo_clicked` PostHog event with cookie/query UTM attribution. The environment value is quote-normalized; static output confirms a valid HTTPS link instead of the prior malformed local path.
- Escape now closes the responsive navigation and resource menu, returning focus to the relevant trigger. No new visual UI was added.
- A broader route sweep returned successful pages for the primary, comparison, legal, blog, and hidden landing routes. `/portal` is not a site route; the supported path is `/kenzo-ai-portal`.
- Final route sweep covered all 27 marketing/legal routes, `/landing-page`, and all 10 live blog article slugs in the sitemap. Each rendered with HTTP 200, one `<main>`, and a self-pointing canonical. The first H1/H2/H3 on the marketing/legal routes uses the same computed global typography. `/landing-page` remains `noindex, nofollow`. This sweep found and fixed the Jenkins comparison page's previously inherited homepage canonical. Blog articles now use a semantic `<main>` without changing their content.
- A 390px-wide mobile geometry sweep covered all 27 marketing/legal routes plus `/landing-page` and all 10 live blog articles. No page-level horizontal overflow remains; fixes cover install-card sizing in `product-pages.css` and responsive blog tables/long links in `BlogPost.module.css`. The installer's wide infrastructure table remains internally scrollable as designed. No pause/play/replay buttons were visible.
- Safe interaction checks confirmed the pricing billing selector updates its selected state and the mobile navigation closes on Escape and returns focus to its trigger. No forms or purchases were submitted.
- Application-owned source filenames contain no reference-project names, and the app has no runtime/build dependency on `.reference`. The source folder is still present and untouched until the user deletes it.
- NOT TESTED: pixel-level screenshot comparison for every route (only the homepage received a side-by-side screenshot review), reduced-motion browser emulation, full keyboard/focus audit, and browser-console review. Mobile overflow/geometry was swept at 390px, but pixel-level mobile/desktop parity across all routes is not confirmed. Forms/CAPTCHA, purchases, and external sandbox sessions were not submitted or mutated.
- The production-only, dismissible Dojo banner remains omitted because it is absent from the reference and the user made exact section/layout matching a strict rule. Do not restore it unless the user relaxes that rule.

## Homepage content and order

Match the rendered reference homepage exactly:

1. Hero with product tour.
2. Animated supported-tool strip.
3. Compact GrapeCity/support proof.
4. Build workflow story.
5. Built-in AI and developer-portal callout.
6. Infrastructure/team-access story.
7. Three-step getting-started section.
8. Comparison links.
9. Pricing overview.
10. Common questions.
11. One closing CTA.

Use the rendered reference source for exact page content, layout, artwork, and animation. Production interactive components may be reused only if their rendered content and behavior match the reference.

## Verification checklist

- [ ] Pixel-level side-by-side parity is confirmed for every page, including full-page responsive layouts and graphics. First-viewport desktop screenshots were reviewed for all 27 marketing/legal routes; full-page visual review remains outstanding, and mobile was checked for overflow/geometry rather than pixel parity.
- [x] Shared heading rules and Notus theme tokens are wired globally; accent remains `#ff4172`.
- [x] The first rendered H1/H2/H3 on every audited route has matching computed global typography.
- [x] Route canonical URLs were checked across all content routes, the hidden landing alias, and all 10 live blog articles; the Jenkins comparison canonical was corrected.
- [x] No pause/play/replay controls are rendered; scene timing still follows visibility and reduced-motion state.
- [ ] Every production interaction, metadata field, structured-data block, canonical, and sitemap entry has been individually audited.
- [x] `npx tsc --noEmit` passes.
- [ ] Re-run the full static build/export after the latest changes. A previous build exported 41 pages; current attempts compile, then fail in Next's type-check worker with host allocation errors. Desktop/mobile visual checks remain NOT TESTED.
