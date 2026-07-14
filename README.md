# FutureSphere — Next.js Frontend

Next.js 16.2.9 (Turbopack) + Tailwind CSS v4 + next/image + Cloudinary.

## Design System

### Colors (CSS custom properties in `app/globals.css`)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-fs-background` | `#F9FAFB` | Page background |
| `--color-fs-dark` | `#1B152B` | Navbar, primary button, headings |
| `--color-fs-grey` | `#7A7D9C` | Body text, subtitles |
| `--color-fs-purple` | `#7F56D9` | CTA button, nav CTA, badges |
| `--color-fs-purple-light` | `#C7A0F9` | Accent (unused currently) |

### Fonts
| Token | Family | Source |
|-------|--------|--------|
| `--font-heading` | Inter | `next/font/google` |
| `--font-body` | Manrope | `next/font/google` |

| Tailwind utility | `@theme` variable    | Resolved to                | Source                          |
| ---------------- | -------------------- | -------------------------- | ------------------------------- |
| `font-heading`   | `--font-heading`     | `var(--font-inter)`        | `next/font/google` (`layout.tsx`) |
| `font-body`      | `--font-body`        | `var(--font-manrope)`      | `next/font/google` (`layout.tsx`) |

### Typography scale
| Token | Size | Line height |
|-------|------|-------------|
| `--text-h1` | 72px | 87px |
| `--text-h2` | 24px | 29px |
| `--text-body-lg` | 20px | 24px |
| `--text-p1` | 24px | 33px |
| `--text-p2` | 16px | 22px |
| `--text-s` | 12px | 17px |

### Typography details

#### Heading (24px)
- Font: Inter (`font-heading`)
- Size: 24px
- Line height: 29px
- Letter spacing: -0.96px
- Weight: 400 (`font-normal`)
- Color: `#1B152B` (`text-fs-dark`)

#### Body/Label Text (20px)
- Font: Manrope (`font-body`)
- Size: 20px
- Line height: 24px
- Letter spacing: -0.96px
- Weight: 400 (`font-normal`)
- Color: `#1B152B` (`text-fs-dark`)

### Badge Tokens

| Tailwind/CSS usage | `@theme` / custom variable | Value |
| ------------------ | -------------------------- | ----- |
| `bg-[linear-gradient(...)]` | `--badge-gradient` | `linear-gradient(90deg, #E9D8FF -195.88%, rgba(255,255,255,0) 364.12%)` |
| `border-[#EEE2FE]` | `--badge-border` | `1px solid #EEE2FE` |
| `h-[30px]` | `--badge-height` | `30px` |

### Spacing system
- **4px grid** for section-level spacing (Tailwind defaults)
- **Custom pixel values** preserved from Figma for component-level details

| Value | Where | Note |
|-------|-------|------|
| `gap-4` (16px) | Hero internal (H1 → subtitle → CTA) | 4px grid |
| `gap-6` (24px) | Main section gap (`<main>`) | 4px grid |
| `pt-8` (32px) | Hero top padding | 4px grid |
| `pb-12` (48px) | Hero bottom padding | 4px grid |
| `px-6` (24px) | Hero horizontal padding | 4px grid |
| `pt-4` (16px) | Navbar top padding | 4px grid |
| `gap-[15px]` | CTA button gap | Figma exact |
| `h-[35px]` | Button height | Figma exact |
| `rounded-[20px]` | Button radius | Figma exact |
| `w-[108px]` | Signup button width | Figma exact |
| `w-[137px]` | Contact Us button width | Figma exact |
| `h-[388px]` | Hero image container | Figma exact |
| `max-w-[1058px]` | Hero + image + navbar width | Design token |
| `tracking-[-3.8267px]` | H1 letter spacing | Figma exact |
| `tracking-[-0.75px]` | Subtitle letter spacing | Figma exact |
| `w-[2px]` | Divider line thickness | Standardized across page |
| `border-t` | Trusted By divider lines | Matches feature card divider weight |

## Project Structure

```
app/
  layout.tsx            # Root layout (Inter + Manrope fonts, lang="en", metadata)
  page.tsx              # Home page
  globals.css           # Tailwind v4 + theme tokens + focus-visible + blur circles
  api/
    upload/
      route.ts          # Server-side Cloudinary upload endpoint

lib/
  cloudinary.ts         # Cloudinary config helper + getCloudinaryUrl()

components/
  ui/
    badge.tsx           # Reusable badge pill (configurable fontSize, w-fit)
    contact-us-button.tsx # Reusable purple CTA button
    divider.tsx         # Vertical divider line (2px, #EDF0EE)
    divider-label.tsx   # Reusable divider with centered text (border-t, #EDF0EE)
    view-all-link.tsx   # "View All" link with chevron hover

  layout/
    navbar.tsx          # Dark pill navbar (1058px, rounded-[47px], accessible SVG logo)
    mobile-menu.tsx     # Mobile hamburger menu with animated overlay
    footer.tsx          # Purple footer with logo, nav, and social icons
    footer-logo.tsx     # Footer logo (Cloudinary)
    footer-nav.tsx      # Footer navigation links
    footer-socials.tsx  # Footer social icons (Cloudinary)

  hero/
    hero.tsx            # H1 + subtitle + CTA buttons (uses ContactUsButton)
    hero-image.tsx      # Hero visual (next/image, rounded-full, hover zoom)

  features/
    features.tsx        # 3-column feature grid with icons, dividers (2px), footer actions
    featured-card.tsx   # Feature card with icon + text + blur circle

  clients/
    client-section.tsx  # "Our Clients" badge + logo row
    client-logo.tsx     # Reusable logo with hover effects

  mission/
    mission-section.tsx # White card, two-column layout (content + image)

  services/
    services-section.tsx# "Services" badge + slider navigation + image

  testimonials/
    testimonials-section.tsx # Testimonial card + Trusted By logo grid
    testimonial-card.tsx     # White card with portrait + quote + author + nav
    slider-navigation.tsx    # Reusable prev/next arrow buttons (type="button")

  blogs/
    blogs-section.tsx   # "Latest Insights" badge + blog card grid
    blog-card.tsx       # Blog card with image, badge, title, excerpt, and read-more link

  newsletter/
    newsletter-section.tsx # Newsletter CTA with mail icon and form
    newsletter-form.tsx    # Email subscription form (mobile + desktop variants)

  metrics/
    metrics-bar.tsx     # Animated counter stats (50K, 150K, 98%)

  forms/
    cloudinary-uploader.tsx # Client-side Cloudinary upload component
```

## Current Page Flow

```
<main gap-8 (32px)>
  Navbar       (pt-4, w-[1058px], h-[59px], rounded-[47px])
    Logo       (accessible SVG with aria-label)
    Links      (About, Careers, Blogs, Pricing — href="#")
    Button     (ContactUsButton)
  Hero         (max-w-[1058px], gap-4 internal)
    H1         (72px, tracking-[-3.8267px])
    Subtitle   (16px, tracking-[-0.75px])
    CTA row    (gap-[15px])
      Signup   (px-[30px], h-[35px], rounded-[20px])
      Contact  (ContactUsButton component)
  HeroImage    (rounded-full, hover zoom effect)
  MetricsBar   (w-[931px], 3 columns with animated counters)
  Features     (w-[1100px], mt-[80px], cards with 2px dividers + footer actions)
  MissionSection (1058×534px, two-column white card)
  ClientSection  (logo row: Descript, Shopify, Slack, Elastic, Loom)
  ServicesSection (white card, slider navigation, purple heading)
  TestimonialsSection (text above image, stacked on mobile/tablet; side-by-side at lg+)
  BlogsSection     (3-column blog card grid)
  NewsletterSection (purple CTA card with email form)
  Footer       (purple background, logo, nav, social icons)
```

## Reusable Components

| Component | Purpose | Variants / Props |
|-----------|---------|------------------|
| `Badge` | Pill-shaped label | `fontSize` prop (default 14px) |
| `ContactUsButton` | Purple CTA button | None |
| `ClientLogo` | Client logo with hover | `src`, `alt`, `width`, `height` |
| `SliderNavigation` | Prev/next arrows | `onPrevious`, `onNext` callbacks |
| `DividerLabel` | Divider with centered text | `children` |
| `TestimonialCard` | Testimonial card layout | `quote`, `authorName`, `authorTitle`, `imageSrc`, `imageAlt` |
| `FeaturedCard` | Feature card | `src`, `alt`, `title`, `description`, `index` |
| `Divider` | Vertical line (2px) | None |
| `ViewAllLink` | Link with chevron | None |

## Cloudinary Integration

- Images are served from Cloudinary under the `futuresphere/` folder.
- Automatic format and quality optimization is applied via `f_auto,q_auto`.
- Server-side upload endpoint: `POST /api/upload`
- Client helper: `lib/cloudinary.ts` — `getCloudinaryUrl(publicId, transformations)`
- Environment variables in `.env.local`:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

## Responsive Strategy

| Range | Label | Layout behavior |
|-------|-------|-----------------|
| <640px | Mobile | Single-column, stacked. Compact typography. |
| 640–1023px | Tablet | **Still single-column** for complex horizontal cards (testimonials, services). Image sits above text. Card height remains at mobile value (`h-[280px]`). Typography may scale with `sm:`. |
| ≥1024px | Desktop | Two-column layout activates (`lg:flex-row`). Image height expands (`lg:h-[420px]`). Gap widens (`lg:gap-[60px]`). |

### Rule
**Layout-causing breakpoints** (`flex-row`, gap enlargement, image height increases) must use `lg:`, not `md:` or `sm:`.

**Typography breakpoints** (`sm:text-[...]`, `sm:leading-[...]`) may continue to use `sm:` because they do not change layout structure.

## Key Decisions Made

1. **Badge component refactored** — removed section-based variants (`features`, `services`, `clients`, `testimonials`, `mission`). Now uses optional `fontSize` prop with `w-fit` sizing. Single source of truth.
2. **Reusable Contact Us button** — extracted from inline usage in Mission, Services, Navbar, Hero, Features into `components/ui/contact-us-button.tsx`
3. **Reusable SliderNavigation** — extracted from Services section, used in Testimonials too. Exposes `onPrevious`/`onNext` callbacks. Buttons have `type="button"`.
4. **Hero image rounded** — switched from `object-contain` to `rounded-full overflow-hidden` with `group-hover:scale-105` zoom effect
5. **Feature cards** — fixed `w-[272px] h-[328px]` per Figma, dividers between cards (2px `#EDF0EE`), centered blur circles via `::before` pseudo-elements with `isolation: isolate` stacking context
6. **Section spacing** — consistent `mt-[80px]` on major sections, `gap-[50px]` between header and content
7. **Single spacing system per stack** — Hero uses `gap-4` on the wrapper, no `mt-*` on children
8. **Figma-exact values preserved** — arbitrary pixel values (`[15px]`, `[35px]`, etc.) are intentional per project convention
9. **SVG attributes camelCased** — `fillRule` / `clipRule` in JSX
10. **Phase 1 complete** — all sections built to Figma fidelity. Responsive layout strategy established: horizontal layouts use `lg:` breakpoint, typography scales may use `sm:`. Tablet frame confirmed stacked.
11. **Accessibility baseline** — `lang="en"` in html, `<title>` + `aria-label` on logo, `href="#"` on nav links, `:focus-visible` ring in globals.css, `type="button"` on slider arrows
12. **Design token consistency** — blur circle uses `var(--color-fs-purple)` instead of hardcoded rgba
13. **Divider standardization** — all divider lines (feature cards + Trusted By) use 2px thickness (`w-[2px]` / `border-t`) with `#EDF0EE` color
14. **Cloudinary migration** — all image assets migrated from local `/public` to Cloudinary `futuresphere/` folder. Local images removed. `next.config.ts` updated to allow Cloudinary remote patterns.
15. **Component organization** — components refactored into feature-based directories: `ui/`, `layout/`, `hero/`, `features/`, `clients/`, `mission/`, `services/`, `testimonials/`, `blogs/`, `newsletter/`, `metrics/`, `forms/`

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build (Turbopack)
```

## Notes for Next AI

- Do NOT normalize custom pixel values to the 4px grid unless explicitly asked — Figma exact values are intentional
- All builds verified with `npm run build` — zero errors
- `next/image` used throughout with `fill` + `object-cover` or `object-contain`
- React 19.2.4 — no `import React` needed for JSX; use `<>...</>` shorthand or `<Fragment>` with key when needed
- Desktop-first workflow: fixed widths/heights are intentional during Phase 1; responsive refactor (layout breakpoints) is complete per Figma tablet stacked strategy
