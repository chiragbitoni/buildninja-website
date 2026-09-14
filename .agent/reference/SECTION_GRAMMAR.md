# Section Grammar

Branch: `redesign-section-grammar` (off `redesign` at `11f04c6`)
Reference: Aceternity "Notus" agent marketing template, saved at `notus-reference.html` in this folder
(SingleFile capture, 2026-09-05). All values below are read off that capture.
Status: planned and reconciled against the reference. Not yet implemented.

Handy fact about the capture: it retains `data-acebuilder-id` attributes naming the source component
for every element, so the reference's own component boundaries are legible. Its primitives are
`components/divide.tsx@DivideX`, `components/container.tsx@Container`, and
`components/common/dots.tsx@Dot`. Where this plan names a primitive, it is mapping onto one of those.

## 1. What the reference actually does

Most marketing sites, including BuildNinja today, separate sections with *empty space*. Each section
brings its own outer margin, its own container width, and its own padding. The boundaries between
sections are therefore invisible and, because every component made its own choice, inconsistent.

Notus inverts this: **separation is drawn, not implied.** The whole page reads as one continuous
ruled sheet, closer to an architectural drawing or a spec sheet than to a stack of floating cards.
That single decision is what makes it look art-directed rather than assembled from a template, and it
is the thing to copy.

## 2. The mechanic

Five rules produce the effect. They are load-bearing together; adopting a subset is what makes a
site look like it has lines bolted onto it.

**Rule 1 — a full-bleed hairline between every band, drawn as an element.** The reference does *not*
put a border on the section. It emits a sibling `<div class="bg-divide h-[1px] w-full">` — a 1px-tall
full-width block — before every band. The page is literally an alternating sequence:

```
DivideX  →  Container  →  DivideX  →  Container  →  ...
```

Making the rule an element rather than a border is a deliberate choice, and it buys two things: a
boundary can never collapse or double when two bands meet, and rules can be stacked. The reference
uses a **double rule** as an accent in three places, a second `DivideX` with `mt-2` giving two
hairlines 8px apart.

**Rule 2 — two vertical rails at the content edge.** Every band is
`max-w-7xl mx-auto border-divide border-x`: 80rem wide, centred, with left and right borders. Same
width on every band, so the borders stack into two unbroken rails down the whole page. This is the
rule that does most of the visual work and the one most easily lost.

**Rule 3 — bands have zero outer margin.** All vertical space is padding *inside* the band. If a
section carried margin, the rails would break at every gap. Note the reference goes further: many
bands carry **no padding at all** and only supply the rails, letting the child grid own its own
structure. Vertical space then comes from a `mt-16` on the grid, inside the rails.

**Rule 4 — emphasis is a tint, never a lift.** A band that should stand out gets a flat surface tint
between the rails: `bg-gray-100` (`#f9f9f9`) light, `#262626` dark. No shadow, no radius, no border of
its own. The hero product shot is exactly this — a tinted band with `p-2 md:p-4 lg:p-8` acting as a
mount for the screenshot.

**Rule 5 — grids reuse the same hairline, flush.** A grid is not a row of cards. It is
`divide-divide divide-x divide-y` plus `border-t` (or `border-y`) on the grid itself: borders appear
only *between* children, the rails supply the outer left and right edges, and the grid's own top
border closes the top. No gap, no radius, no shadow, no per-card border. Responsive collapse is done
by cancelling trailing edges per cell (`md:border-r-0`, `md:border-b-0`) rather than by regenerating
the grid.

Markers: 8px squares (`h-2 w-2`) at all four corners of showcase bands only, filled with `--primary`
so they read near-black on light and near-white on dark, with `border-radius: 0%` set explicitly. At
`xl` they shift by `-8px` horizontally and `-4px` vertically so they straddle the rails rather than
sitting inside them. They are registration marks, not decoration.

There is one hairline value for *structure*: `--divide`, used by both the rules and the rails and the
grid dividers. The reference does keep a second, lighter `--line` token for interior decorative
lines, so the discipline is "one value for anything structural", not "one value in the file".

## 3. Divergences from the reference, on purpose

One, and it is smaller than expected now the reference has been read.

The page keeps the `#f7f8fa` canvas instead of the reference's pure white (`bg-white` / `dark:bg-black`
on `<body>`), so that Rule 4 has somewhere to go — a tinted band can be white and read as raised.

`--section-max` of **1280px** turns out not to be a divergence at all: the reference's `max-w-7xl` is
`--container-7xl: 80rem`, which is exactly 1280px. It does still diverge from the BuildNinja redesign
plan's 1240px and from the existing 1500px container, and the reference settles the argument — 1280px
it is, and the existing 1500px container must not be reused for bands.

Worth knowing: the reference's own accent is `--color-brand: #f17463`, used about as sparingly as
BuildNinja uses `#D8305B`. Nothing to copy, but it confirms the discipline.

## 4. Token contract

All values below are read off the reference. They go into `src/app/globals.css` following the shape
that file **actually** has, which is not what the redesign plan assumes: `:root` carries the **dark**
palette and `[data-theme='light']` overrides it. So `--rule` and `--section-tint` are declared with
their dark values in `:root` and overridden in the light block. The theme-neutral tokens (widths,
spacing, marker size) go in `:root` only.

| Token | Light | Dark | Note |
|---|---|---|---|
| `--rule` | `#eaedf1` | `#262626` | The single structural hairline. Reference `--divide` is `--color-gray-300` / `--color-neutral-800`. **Set explicitly, do not alias `--color-border`** — see below. |
| `--section-max` | `1280px` | — | Content column and rail x-position. Confirmed `80rem`. |
| `--section-space` | `80px` | — | Standard band padding, block axis. Reference `py-20`. |
| `--section-space-hero` | `128px` top, `80px` bottom | — | Reference `md:pt-32 md:pb-20`. Deliberately asymmetric: more air above the headline than below it. |
| `--section-space-mobile` | `40px` | — | Reference `pt-10 pb-10` below `md`. |
| `--section-space-inset` | `64px` | — | Header-to-grid gap *inside* a band. Reference `mt-16`. Not band padding. |
| `--section-pad-x` | `16px` → `32px` at `md` | — | Reference `px-4 md:px-8`. Only on bands that carry their own padding. |
| `--section-tint` | `#f9f9f9` | `#262626` | Rule 4. Flat. Note the dark tint equals the dark rule colour. |
| `--section-marker` | `8px` | — | Corner square, `border-radius: 0`, filled from `--color-text`. |

**Why `--rule` is not an alias.** An earlier note claimed `--color-border` composites to within a
point or two of the reference. It does not. In light theme `--color-border` is
`rgba(15, 23, 42, 0.10)`, which over the `#f7f8fa` canvas composites to about `#e0e2e5` — roughly ten
points darker per channel than `#eaedf1`. Since the whole exercise is the hairline, use the
reference's value. Dark is closer (`rgba(255,255,255,0.10)` over `#08080b` gives about `#212124`
against `#262626`) but set it explicitly too, so there is one deliberate value rather than an
accident of compositing.

The breakpoint is `md` (768px), not the 1024px my earlier notes assumed, and the mobile step is a
straight swap to 40px rather than "roughly half".

Controls keep their radius: reference buttons are `rounded-xl` (12px) with `border-divide border`.
This is consistent with the agreed depth — strip radii inside grids, keep them on controls and on
large showcase surfaces.

Must not collide with the existing `--marketing-*` scale, which keeps
`--marketing-section-space: clamp(68px, 7.5vw, 112px)` and `--marketing-content-width: 1360px` until
their last consumers are converted. Do not reuse `--container-width: 1500px` for bands.

**Not in scope here.** The redesign plan assumes a light-first `:root`, Geist as the marketing face,
and `--page-canvas*` tokens. None of that is on disk. Inverting the default theme is a separate
decision and must not ride along with a section change.

## 5. Primitive

`src/components/Marketing/Section.jsx` + `Section.module.css`. The export list mirrors the reference's
own component split rather than inventing a different one.

- `SectionRule` — the full-bleed hairline, as an element. Maps to `DivideX`. Props: `double` for the
  8px-apart stacked pair used as an accent. This is a sibling of `Section`, not a part of it.
- `Section` — the band. Maps to `Container`. Applies `--section-max`, centres, draws the two rails via
  `border-inline`, and takes **no margin**. Props: `space` (`none` | `standard` | `hero`), `padX`,
  `tint`, `markers`, `as`. `space="none"` is the common case for bands whose child grid owns the
  rhythm — do not default to padding.
- `SectionHeader` — eyebrow, heading, optional sub. Maps to `SectionHeading` + `SubHeading`. Reference
  metrics: heading `text-2xl md:text-3xl lg:text-4xl` at `font-medium` with `tracking-tight`, sub at
  `text-sm lg:text-base` in a muted grey, `mt-4` between them. Supports left and centre alignment;
  the reference uses both. Eyebrow is one of the sanctioned uses of the `#D8305B` accent.
- `SectionGrid` — flush hairline cells. Applies dividers between children plus a top border, and
  cancels trailing edges at breakpoints. No gap, no radius, no shadow, by construction rather than by
  convention. Props: `cols`, `mdCols`.
- `SectionBody` — plain content well for prose bands.

Composition looks like this, and the alternation is the point:

```jsx
<SectionRule />
<Section space="hero" padX>
  <SectionHeader eyebrow="…" heading="…" sub="…" align="center" />
</Section>
<SectionRule />
<Section tint markers>
  {/* product shot */}
</Section>
<SectionRule />
<Section>
  <SectionHeader heading="…" />
  <SectionGrid cols={1} mdCols={3}>{cells}</SectionGrid>
</Section>
```

## 6. Conversion procedure

Per component, in this order. Steps 1-3 are not optional; skipping them is what produces doubled
rails and doubled spacing.

1. **Delete the component's own container width.** It is now the primitive's job.
2. **Delete the component's own page background.** The band or canvas owns it.
3. **Delete the component's own vertical margin and padding.** The space tokens own it.
4. Wrap in `Section`, choosing `space` from the table above.
5. Convert card grids to `SectionGrid`: remove `gap`, `border-radius`, `box-shadow`, and per-card
   `border` from the cell class. Per the agreed depth, radii survive **only** on large showcase
   surfaces such as the product screenshot frame, at the plan's pinned 20px.
6. Replace any shadow-based emphasis with `tint`.
7. Check the component against the band above and below it: the rails must line up, and there must be
   exactly one hairline at each boundary, not two stacked.

`src/components/Home/FAQSection.module.css` is the closest thing already in the repo to the target
treatment — sticky heading column, one continuous hairline-divided list, neutral hover, no accent
decoration. Use it as the reference for tone.

## 7. Rollout

Marketing core first, review, then the rest. Roughly 95 section components over 24 routes.

**Slice A — homepage, 9 bands.** `CenteredHeroSection`, `WorksWith`, `CommitToProduction`,
`WhySelfHosted`, `HowNinjaCompares`, `AIRoadmap`, `FAQSection`, `TrustBanner`, `CTASection`.
This slice is the proof: it exercises hero spacing, a logo strip, a comparison grid, a hairline list,
and a closing CTA, which is every variant the primitive needs to support.

**Slice B — rest of the core.** `features` (3), `pricing` (10), `install`, `about`, `contact`.
Pricing is the riskiest: 10 bands including `PricingPlans`, `PricingTable`, and `PricingDetailedSpecs`,
which are already table-like and should convert cleanly, plus live plan API behaviour to preserve.

**Pause for review here.**

**Slice C — the long tail.** Four compare pages (~41 bands, highly repetitive: each has `Hero`,
`ComparisonTable`, `MigrationGuide`, `FAQ`, `CTABanner`, so a fix applies four times over), the
compare portal, `faq` (4), `partners` (5), `dojo` (5), `support`, `blog` and `blog/[slug]`, and the
shared `Legal/LegalContent` behind six legal routes. `Nav` and `Footer` need their edges aligned to
the rails so the sheet starts and ends cleanly.

## 8. Constraints

Preserve, unless a change is explicitly approved: routes, pricing and plan API behaviour, analytics
(`SectionTracker` wrappers on the homepage capture `section_viewed`; keep them outside `Section`),
auth, SEO metadata and JSON-LD, the Dojo and installer flows, and `BuildNinjaDemo` behaviour.

No em dashes in website copy. `lucide-react` for new icons. Accent `#D8305B` stays rare: hero rule,
eyebrows, recommended badge, focus rings.

## 9. Verification

`npm run build` — 34 routes, static export, one expected export warning. **Must be run on Windows**:
only `@next/swc-win32-x64-msvc` is installed, so the Linux sandbox cannot build.

Then, visually: scroll the full page and confirm the rails never break, no boundary carries two
stacked hairlines, and the sub-1024px breakpoint keeps the rails while halving the padding.

Update `BUILDNINJA_REDESIGN_TRACKER.md` by editing the existing row per scope, not by appending
history.

## 10. Reference section vocabulary

The reference's homepage runs, in order: hero, tinted hero image, logo cloud, how-it-works, agentic
intelligence, use cases, benefits, testimonials, pricing, security, FAQs, CTA, footer. BuildNinja's
homepage maps onto it almost one to one, which is why Slice A is a fair test of the primitive:

| Reference band | Treatment to copy | BuildNinja equivalent |
|---|---|---|
| hero | `space="hero"`, centred header | `CenteredHeroSection` |
| hero image | `tint` + `markers`, `p-2 md:p-4 lg:p-8` | `BuildNinjaDemo` frame |
| logo cloud | 2-up mobile, 4-up `md`, per-cell trailing edges cancelled | `WorksWith` |
| how-it-works | 2-col `divide-x` + `border-t`, `mt-16`; separate mobile stack | `CommitToProduction`, `HowItWorks` |
| agentic intelligence | 1-col to 2-col, `divide-y md:divide-x`, `border-y` | `WhySelfHosted`, `CoreCapabilities` |
| testimonials | tinted grid strip over a flush logo grid | `SocialProof`, `TrustStats` |
| pricing | 3-col `divide-y` → `md:divide-x md:divide-y-0` | `PricingPlans`, `PricingTeaser` |
| FAQs | one continuous hairline-divided list | `FAQSection` (already close) |
| CTA | `pt-10 pb-10`, no grid | `CTASection`, `TrustBanner` |

Everything my earlier notes flagged for verification is now settled. The two corrections worth
carrying forward: standard band padding is 80px (`py-20`), not 64px — 64px is the header-to-grid gap
*inside* a band — and the responsive step is at `md` (768px) to a flat 40px, not a halving at 1024px.
