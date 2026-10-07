/**
 * Centralized site configuration for NeoFilm website.
 * Single source of truth for marketing links, store IDs, support emails,
 * SEO defaults, and legal metadata.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  formalName: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  publisher: {
    name: string;
    developer: string;
    copyrightYear: number;
    copyrightText: string;
  };
  stores: {
    ios: {
      status: 'coming-soon' | 'available';
      title: string;
      bundleId: string;
      appId: string;
      url: string;
      badgeText: string;
      minTarget: string;
      proEntitlement: string;
      annualProduct: string;
      monthlyProduct: string;
      lifetimeProduct: string;
    };
    android: {
      status: 'coming-soon' | 'available';
      title: string;
      packageId: string;
      url: string;
      badgeText: string;
      minTarget: string;
      proEntitlement: string;
      annualProduct: string;
      monthlyProduct: string;
      lifetimeProduct: string;
    };
  };
  navigation: NavItem[];
  legal: {
    privacyEffectiveDate: string;
    termsEffectiveDate: string;
    lastUpdated: string;
    legacyFlyCricketPrivacyUrl: string;
    legacyFlyCricketTermsUrl: string;
  };
  seo: {
    primaryPhrase: string;
    secondaryPhrases: string[];
    defaultOgImage: string;
    twitterHandle?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'NeoFilm',
  formalName: 'NeoFilm - Vintage Film Camera',
  tagline: 'Film-inspired color. Modern control.',
  description:
    'A vintage film camera and photo editor for Android and iPhone, with 30+ film-inspired looks, custom recipes, supported-device manual and RAW capture, and a mobile Darkroom.',
  url: 'https://neofilm.cam',
  supportEmail: 'simpelkode@gmail.com',
  publisher: {
    name: 'NeoFilm',
    developer: 'ZEROdev',
    copyrightYear: 2026,
    copyrightText: '© 2026 NeoFilm / ZEROdev. All rights reserved.',
  },
  stores: {
    ios: {
      status: 'coming-soon',
      title: 'Download on the App Store',
      bundleId: 'com.zerodev.neofilm',
      appId: '6814821237',
      url: 'https://apps.apple.com/app/id6814821237',
      badgeText: 'Download on the App Store',
      minTarget: 'iOS 17.0 or later',
      proEntitlement: 'NeoFilm Pro',
      annualProduct: 'com.zerodev.neofilm.pro.annual',
      monthlyProduct: 'com.zerodev.neofilm.pro.monthly',
      lifetimeProduct: 'com.zerodev.neofilm.pro.lifetime',
    },
    android: {
      status: 'available',
      title: 'Get it on Google Play',
      packageId: 'com.zerodev.neofilm',
      url: 'https://play.google.com/store/apps/details?id=com.zerodev.neofilm',
      badgeText: 'Get it on Google Play',
      minTarget: 'Android 8.0 (Oreo) or later',
      proEntitlement: 'NeoFilm Pro',
      annualProduct: 'neofilm_pro_annual',
      monthlyProduct: 'neofilm_pro_monthly',
      lifetimeProduct: 'neofilm_pro_lifetime',
    },
  },
  navigation: [
    { label: 'Features', href: '/features/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Support', href: '/support/' },
  ],
  legal: {
    privacyEffectiveDate: 'August 3, 2026',
    termsEffectiveDate: 'August 3, 2026',
    lastUpdated: 'October 7, 2026',
    legacyFlyCricketPrivacyUrl:
      'https://doc-hosting.flycricket.io/neofilm-privacy/60a7b253-ef41-4c0c-b306-3facb7c194e2/privacy',
    legacyFlyCricketTermsUrl:
      'https://doc-hosting.flycricket.io/neofilm-terms/72cdcd34-5f63-44f1-9dad-d203d4b6ecfa/terms',
  },
  seo: {
    primaryPhrase: 'vintage film camera app for Android and iPhone',
    secondaryPhrases: [
      'analog film camera app',
      'retro camera app',
      'film simulation camera',
      'RAW camera app',
      'manual camera app',
      'custom film recipes',
      'vintage photo filters',
      'mobile darkroom',
      'RAW photo editor',
      'DNG camera app',
      'film grain and halation',
      'film camera app for Android and iPhone',
    ],
    defaultOgImage: '/images/og/og-image.jpg',
  },
};
