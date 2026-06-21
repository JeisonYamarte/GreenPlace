# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Vite HMR)
pnpm build      # Production build
pnpm preview    # Preview production build locally
pnpm lint       # Run ESLint
```

## Architecture

Single-page landing site for **GreenPlace**, a handmade crochet store based in Venezuela. No router — the entire app is one scrollable page.

**Rendering flow:**
`main.jsx` → `App.jsx` (HelmetProvider + SEO meta/JSON-LD) → `pages/Home.jsx` → section components in order:
`Hero` → `WaveDivider` → `Purpose` → `Products` → `AboutUs` → `CTA` (testimonials + footer)

**Component layout:**
```
src/
  components/
    hero/       — Hero, HeroCarousel, WaveDivider
    about/      — AboutUs
    products/   — Products, ProductCard, products.data.js
    cta/        — CTA, TestimonialCarousel, Footer, SocialCard, reviews.js
    purpose/    — Purpose
    layout/     — Navbar
    SVG/        — Reusable SVG illustrations
    ui/         — marquee.jsx (shared animation primitive)
  hooks/        — useScreenSize (debounced window resize)
  lib/          — utils.js (cn = clsx + tailwind-merge)
  styles/       — globals.css (base styles)
```

**Static data files** — product images and testimonials are defined as plain JS arrays in co-located `.data.js` / `reviews.js` files. All images are served from Cloudinary with transformation params baked into the URL (`w_400,f_auto,q_auto`).

## Styling

Tailwind CSS v3 with a custom brand palette defined in `tailwind.config.js`:
- `brand-green` / `brand-green-light` / `brand-green-dark`
- `brand-yellow`, `brand-cream` / `brand-cream-dark`, `brand-coral`

Custom `marquee` and `marquee-vertical` Tailwind animations are defined in the config and used by `src/components/ui/marquee.jsx`.

Use `cn()` from `src/lib/utils.js` for conditional class merging.

## Animation

Uses the **Motion** library (`motion` package, formerly Framer Motion). Scroll-triggered animations use `react-intersection-observer`.

## SEO

All meta tags, Open Graph, Twitter Card, and JSON-LD structured data are managed in `App.jsx` via `react-helmet-async`. The canonical URL is `https://greenplace.life`. The JSON-LD schema type is `Store`.
