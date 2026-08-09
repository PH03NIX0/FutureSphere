export const mainNavLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blogs", label: "Blogs" },
  { href: "/pricing", label: "Pricing" },
] as const;

/** Routes that currently exist as App Router pages. */
export const implementedNavHrefs = new Set<string>([
  "/about",
  "/careers",
  "/blogs",
  "/pricing",
  "/contact",
]);
