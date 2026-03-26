export type SectionKey = "home" | "about" | "services" | "contact";

export type IconName =
    | "badge-check"
    | "chevron-left"
    | "chevron-right"
    | "clock"
    | "facebook"
    | "globe"
    | "headphones"
    | "instagram"
    | "mail"
    | "map-pin"
    | "message-square"
    | "phone"
    | "rocket"
    | "shield-check"
    | "sparkles"
    | "whatsapp";

export interface MediaAssetConfig {
    src: string;
    alt: string;
}

export interface ThemeConfig {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        surface: string;
        page: string;
        soft: string;
        text: string;
        border: string;
    };
    fonts: {
        bodyFamily: string;
        headingFamily: string;
        googleFontsUrl?: string;
    };
}

export interface BrandConfig {
    name: string;
    subtitle: string;
    logo: MediaAssetConfig;
    favicon: string;
}

export interface NavigationItem {
    label: string;
    section: SectionKey;
    ariaLabel?: string;
}

export type ActionLinkKind = "whatsapp" | "phone" | "email" | "anchor" | "url";

export interface ActionLinkConfig {
    kind: ActionLinkKind;
    label: string;
    value?: string;
    message?: string;
    ariaLabel?: string;
    subject?: string;
    body?: string;
    newTab?: boolean;
}

export interface NavigationConfig {
    items: NavigationItem[];
    cta: ActionLinkConfig;
}

export type ContactMethodType =
    | "whatsapp"
    | "phone"
    | "email"
    | "location"
    | "custom";

export interface ContactMethodConfig {
    label: string;
    value: string;
    icon: IconName;
    type: ContactMethodType;
    description?: string;
    ariaLabel?: string;
    action?: ActionLinkConfig;
}

export interface SocialLinkConfig {
    label: string;
    url: string;
    icon: IconName;
    ariaLabel?: string;
    newTab?: boolean;
}

export interface ContactConfig {
    methods: ContactMethodConfig[];
    socialLinks: SocialLinkConfig[];
}

export interface FeatureItemConfig {
    title: string;
    description: string;
    icon: IconName;
}

export interface HeroSectionConfig {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryAction: ActionLinkConfig;
    secondaryAction?: ActionLinkConfig;
    image: MediaAssetConfig;
}

export interface AboutSectionConfig {
    badge: string;
    title: string;
    description: string;
    image: MediaAssetConfig;
    highlights: FeatureItemConfig[];
}

export interface ServiceItemConfig {
    title: string;
    description: string;
    image: MediaAssetConfig;
}

export interface ServicesSectionConfig {
    badge: string;
    title: string;
    description: string;
    itemAction: ActionLinkConfig;
    navigationLabels: {
        previous: string;
        next: string;
    };
    items: ServiceItemConfig[];
}

export interface ContactMapVisualConfig {
    type: "map";
    embedUrl: string;
    title?: string;
}

export interface ContactImageVisualConfig {
    type: "image";
    image: MediaAssetConfig;
}

export type ContactVisualConfig =
    | ContactMapVisualConfig
    | ContactImageVisualConfig;

export interface ContactSectionConfig {
    badge: string;
    title: string;
    card: {
        eyebrow: string;
        description: string;
        supportingText?: string;
        closingText: string;
    };
    visual: ContactVisualConfig;
}

export interface FooterConfig {
    brandDescription: string;
    navigationTitle: string;
    contactTitle: string;
    socialTitle: string;
    socialDescription: string;
}

export interface StructuredAddressConfig {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
}

export interface StructuredGeoConfig {
    latitude: number;
    longitude: number;
}

export interface OpeningHoursConfig {
    dayOfWeek: string[];
    opens: string;
    closes: string;
}

export interface ContactPointConfig {
    contactType?: string;
    telephone?: string;
    email?: string;
    areaServed?: string;
    availableLanguage?: string[];
}

export interface SeoStructuredDataConfig {
    type: "Organization" | "LocalBusiness";
    name?: string;
    description?: string;
    image?: string;
    telephone?: string;
    email?: string;
    sameAs?: string[];
    address?: StructuredAddressConfig;
    geo?: StructuredGeoConfig;
    openingHours?: OpeningHoursConfig[];
    priceRange?: string;
    contactPoints?: ContactPointConfig[];
}

export interface SeoConfig {
    lang: string;
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
    image: MediaAssetConfig;
    locale: string;
    structuredData: SeoStructuredDataConfig;
}

export interface FloatingActionConfig {
    icon: IconName;
    srLabel: string;
    action: ActionLinkConfig;
}

export interface SiteConfig {
    brand: BrandConfig;
    theme: ThemeConfig;
    navigation: NavigationConfig;
    contact: ContactConfig;
    seo: SeoConfig;
    sections: {
        hero: HeroSectionConfig;
        about: AboutSectionConfig;
        services: ServicesSectionConfig;
        contact: ContactSectionConfig;
    };
    footer: FooterConfig;
    floatingAction: FloatingActionConfig;
}
