# NeoFilm — Official Product Website

The official, privacy-first, search-optimized product website for **NeoFilm - Vintage Film Camera** on iOS and Android. Built with Astro, TypeScript, and modern semantic CSS.

This static website serves as the official marketing presence, product showcase, and permanent host for App Store Connect and Google Play Console compliance pages:
- **Support Center & FAQ**: [`/support/`](https://neofilm.app/support/)
- **Privacy Policy**: [`/privacy/`](https://neofilm.app/privacy/)
- **Terms of Use**: [`/terms/`](https://neofilm.app/terms/)

---

## 1. Project Requirements & Architecture

- **Node.js**: v20+ (tested on Node v24.14.0)
- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Language**: TypeScript (Strict Mode)
- **Design System**: Vanilla CSS with reusable design tokens matching NeoFilm’s matte magnesium camera chassis and amber indicator orange.
- **Privacy & Performance**: Zero analytics SDKs, zero advertising trackers, zero cookies requiring consent banners, zero unnecessary client-side JavaScript.

---

## 2. Quick Start & Local Development

### Installation
```bash
cd /Users/ahmadsufyan/Documents/personal-project/frontend/web/neofilm
npm install
```

### Local Development Server
Start the local development server at `http://localhost:4321`:
```bash
npm run dev
```

### Type Checking & Linting
Validate strict TypeScript types across all `.astro` and `.ts` files:
```bash
npm run check
```

### Production Build
Compile high-performance static HTML, CSS, assets, and sitemaps into the `dist/` directory:
```bash
npm run build
```

### Local Production Preview
Preview the production build locally:
```bash
npm run preview
```

---

## 3. Centralized Site Configuration

All external store links, support emails, publisher information, and legal dates are centralized in a single configuration file:

**`src/config/site.ts`**

```typescript
export const siteConfig = {
  name: 'NeoFilm',
  formalName: 'NeoFilm - Vintage Film Camera',
  tagline: 'Analog character. Modern control.',
  url: 'https://neofilm.app',
  supportEmail: 'simpelkode@gmail.com',
  publisher: {
    name: 'NeoFilm',
    developer: 'ZEROdev',
    copyrightYear: 2026,
    copyrightText: '© 2026 NeoFilm / ZEROdev. All rights reserved.',
  },
  stores: {
    ios: {
      appId: '6814821237',
      bundleId: 'com.zerodev.neofilm',
      url: 'https://apps.apple.com/app/id6814821237',
      // ...
    },
    android: {
      packageId: 'com.zerodev.neofilm',
      url: 'https://play.google.com/store/apps/details?id=com.zerodev.neofilm',
      // ...
    }
  },
  legal: {
    privacyEffectiveDate: 'August 3, 2026',
    termsEffectiveDate: 'August 3, 2026',
    lastUpdated: 'September 23, 2026',
  }
};
```

To update any store URL, publisher name, or email, update `src/config/site.ts`. The changes will propagate across all pages, footers, headers, JSON-LD schemas, and meta tags.

---

## 4. Route Map & Page Structure

| URL Path | Template File | Topic & Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage: Vintage film camera app, live viewfinder, profiles, Pro pricing |
| `/features/` | `src/pages/features.astro` | Technical overview: Manual ISO, shutter speed, manual focus, peaking, RAW |
| `/film-recipes/` | `src/pages/film-recipes.astro` | Custom recipes: 8-channel HSL mixer, grain, halation, QR code sharing |
| `/darkroom/` | `src/pages/darkroom.astro` | Mobile Darkroom: RAW DNG processing, non-destructive editing, contact sheets |
| `/support/` | `src/pages/support.astro` | Official App Store / Play Store Support URL & comprehensive FAQ |
| `/privacy/` | `src/pages/privacy.astro` | Audited Privacy Policy (100% on-device processing, RevenueCat, Crashlytics) |
| `/terms/` | `src/pages/terms.astro` | Terms of Use: Licenses, photo ownership, subscriptions, Apple/Google terms |
| `/404.html` | `src/pages/404.astro` | Tactile analog "Frame Not Found" error page |

---

## 5. Asset Inventory & Organization

Assets are stored in `public/` and copied directly to the root of `dist/`:

- **Logos & Icons**:
  - `public/images/logo/neofilm-logo.png`: 1080×1080 transparent camera mark.
  - `public/images/logo/neofilm-icon.png`: App launcher icon.
  - `public/favicon.svg` & `public/favicon.ico`: Vector & multi-size favicons.
  - `public/apple-touch-icon.png`: 180×180 iOS home-screen icon.
  - `public/icons/icon-192.png` & `public/icons/icon-512.png`: PWA manifest icons.
- **Store Badges**:
  - `public/images/badges/app-store-badge.svg`: Official Apple App Store badge.
  - `public/images/badges/google-play-badge.svg`: Official Google Play badge.
- **Sample Photography**:
  - `public/images/samples/sample-portra.jpg`: Authentic NeoFilm sample photo (onboarding asset 1).
  - `public/images/samples/sample-viewfinder.jpg`: Authentic NeoFilm viewfinder sample (onboarding asset 2).
- **Social Sharing**:
  - `public/images/og/og-image.jpg`: 1200×630 Open Graph & Twitter card preview image.
- **Search & PWA**:
  - `public/robots.txt`: Directs search engine crawlers to `sitemap-index.xml`.
  - `public/site.webmanifest`: Web application manifest.

---

## 6. How to Expand the Website

### Adding Future Content or SEO Articles
1. To add an article or guide (e.g. `/guides/how-to-shoot-kodak-portra/`), create `src/pages/guides/how-to-shoot-kodak-portra.astro`.
2. Wrap the page with `BaseLayout`:
   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   ---
   <BaseLayout title="How to Shoot Portra 400 – NeoFilm Guide" description="...">
     <article class="container">
       <h1>How to Shoot Portra 400</h1>
       ...
     </article>
   </BaseLayout>
   ```
3. Run `npm run build`. The sitemap integration will automatically include the new route in `sitemap-0.xml`.

### Updating Application Screenshots
1. Save high-resolution PNG or JPEG screenshots into `public/images/screenshots/`.
2. Use `<ScreenshotFrame imageSrc="/images/screenshots/new-screen.jpg" imageAlt="..." />` inside any Astro component.
3. Include explicit `alt` text describing the interface features shown.

### Updating Legal Documents
- Edit `src/pages/privacy.astro` or `src/pages/terms.astro`.
- Update `lastUpdated` in `src/config/site.ts`.
- Ensure disclosures remain 100% aligned with current Apple App Privacy and Google Play Data Safety forms.

### Validating Broken Links
Run the link audit script before deploying:
```bash
npm run build
python3 -c "
import os
assert os.path.exists('dist/index.html')
assert os.path.exists('dist/support/index.html')
assert os.path.exists('dist/privacy/index.html')
assert os.path.exists('dist/terms/index.html')
print('All core routes verified!')
"
```

---

## 7. Static Hosting & Deployment

The static output in `dist/` is compatible with all static hosting providers:

### Cloudflare Pages
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**: `NODE_VERSION=20`

### Vercel / Netlify
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Output directory**: `dist`

### GitHub Pages
Deploy the `dist/` directory directly or use the official GitHub Actions Astro workflow.

---

## 8. Store Review URLs Reference

When submitting NeoFilm to App Store Connect and Google Play Console, use these permanent URLs:

- **Marketing URL**: `https://neofilm.app`
- **Support URL**: `https://neofilm.app/support/`
- **Privacy Policy URL**: `https://neofilm.app/privacy/`
- **Terms of Use URL**: `https://neofilm.app/terms/`
