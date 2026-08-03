# FutureSphere — Next.js Frontend

Next.js 16.2.9 (Turbopack) + Tailwind CSS v4 + `next/image` + Cloudinary.

## Tech Stack

- **Framework:** Next.js 16.2.9 (Turbopack, App Router)
- **Styling:** Tailwind CSS v4 with `@theme` custom properties
- **Images:** `next/image` with Cloudinary remote patterns
- **Animations:** `motion` (Framer Motion)
- **Language:** TypeScript
- **Runtime:** React 19.2.4

## Setup

```bash
npm run dev      # localhost:3000
npm run build    # production build (Turbopack)
npm run lint     # ESLint
```

## Project Structure

```
app/
  layout.tsx            # Root layout, fonts, metadata
  page.tsx              # Home page (section composition)
  globals.css           # Tailwind theme tokens, focus-visible, blur circles
  api/upload/route.ts   # Server-side Cloudinary upload

lib/
  cloudinary.ts         # getCloudinaryUrl() helper + transforms

components/
  ui/                   # Shared primitives (Badge, ContactUsButton, Divider, etc.)
  layout/               # Navbar, MobileMenu, Footer
  hero/                 # Hero content + image
  features/             # Feature grid + cards
  clients/              # Client logo row
  mission/              # Mission two-column section
  services/             # Slider-based services section
  testimonials/         # Testimonial card + slider
  blogs/                # Blog card grid
  newsletter/           # Newsletter CTA + form
  metrics/              # Animated counters
  forms/                # Cloudinary uploader
```

## Responsive Strategy

- **Mobile / Tablet (<1024px):** Stacked single-column layouts for complex horizontal cards (testimonials, services). Typography scales with `sm:`.
- **Desktop (≥1024px):** Horizontal layouts activate with `lg:flex-row`, expanded image heights, and widened gaps.
- **Rule:** Layout-causing breakpoints (`flex-row`, height/gap changes) must use `lg:`. Typography-only changes may use `sm:`.

## Cloudinary Integration

- Assets live in the `futuresphere/` folder.
- `getCloudinaryUrl(publicId, transformations)` builds optimized URLs with `f_auto,q_auto`.
- Server upload endpoint: `POST /api/upload`.
- Env vars: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.

## Design System

- **Colors:** CSS custom properties in `app/globals.css` (`--color-fs-background`, `--color-fs-dark`, `--color-fs-grey`, `--color-fs-purple`, etc.).
- **Fonts:** Inter (`font-heading`) + Manrope (`font-body`) via `next/font/google`.
- **Typography scale:** Custom tokens for h1–h3, body, and small text.
- **Spacing philosophy:** 4px grid for section spacing; arbitrary pixel values preserved from Figma for component-level details.

## Conventions

- **Props immutability:** All component prop interfaces use `readonly`.
- **Figma fidelity:** Arbitrary values (`[15px]`, `[35px]`, etc.) are intentional unless explicitly requested otherwise.
- **Code quality:** Sonar-driven improvements (no nested ternaries), consistent TypeScript typing, and ESLint-clean codebase.
- **Accessibility:** `lang="en"`, `:focus-visible` rings, `aria-label`/`aria-current` where needed, `type="button"` on non-submit buttons.
- **Images:** `next/image` with `fill` + `object-cover` or `object-contain`; avoid raw `<img>` when possible.

## Notes for Next AI

- Do NOT normalize custom pixel values to the 4px grid unless explicitly asked.
- Desktop-first workflow is intentional during current phase; responsive breakpoints follow the strategy above.