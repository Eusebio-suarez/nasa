import { SITE_CONFIG } from "../../site.config.mjs";
import type {
    ActionLinkConfig,
    ActionLinkKind,
    ContactMethodConfig,
    ContactMethodType,
    SectionKey,
    SocialLinkConfig,
} from "../types/site";

export const SECTION_IDS: Record<SectionKey, string> = {
    home: "inicio",
    about: "nosotros",
    services: "servicios",
    feature: "destacado",
    contact: "contacto",
};

export interface ResolvedActionLink {
    kind: ActionLinkKind;
    label: string;
    ariaLabel?: string;
    href: string;
    target?: "_blank";
    rel?: "noopener noreferrer";
}

export interface ResolvedContactMethod extends ContactMethodConfig {
    actionLink?: ResolvedActionLink;
}

export interface ResolvedSocialLink extends SocialLinkConfig {
    target?: "_blank";
    rel?: "noopener noreferrer";
}

const normalizePhoneNumber = (phone: string) => phone.replace(/\D+/g, "");

const buildWhatsAppLink = (phone: string, message?: string) => {
    const query = message ? `?text=${encodeURIComponent(message)}` : "";

    return `https://wa.me/${normalizePhoneNumber(phone)}${query}`;
};

const buildPhoneLink = (phone: string) => `tel:${normalizePhoneNumber(phone)}`;

const buildEmailLink = (email: string, subject?: string, body?: string) => {
    const params = new URLSearchParams();

    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);

    const query = params.toString();

    return `mailto:${email}${query ? `?${query}` : ""}`;
};

const isSectionKey = (value: string): value is SectionKey => value in SECTION_IDS;

const buildSectionHref = (value?: string) => {
    if (!value) return "#";
    if (isSectionKey(value)) return `#${SECTION_IDS[value]}`;
    if (value.startsWith("#")) return value;

    return `#${value}`;
};

const templatePattern = /\{\{\s*(\w+)\s*\}\}/g;

export const interpolateText = (
    value: string | undefined,
    context: Record<string, string> = {}
) =>
    value?.replace(templatePattern, (_, key: string) => context[key] ?? "") ?? "";

const baseTemplateContext = {
    brandName: SITE_CONFIG.brand.name,
    brandSubtitle: SITE_CONFIG.brand.subtitle,
};

const contactMethods = SITE_CONFIG.contact.methods;
const fallbackWhatsApp = contactMethods.find((method) => method.type === "whatsapp")?.value;
const fallbackPhone =
    contactMethods.find((method) => method.type === "phone")?.value ?? fallbackWhatsApp;
const fallbackEmail = contactMethods.find((method) => method.type === "email")?.value;

const resolveValueWithFallback = (
    kind: ActionLinkKind,
    value?: string
) => {
    if (value) return value;

    if (kind === "whatsapp") return fallbackWhatsApp;
    if (kind === "phone") return fallbackPhone;
    if (kind === "email") return fallbackEmail;

    return value;
};

export const resolveActionLink = (
    action: ActionLinkConfig,
    context: Record<string, string> = {}
): ResolvedActionLink => {
    const resolvedContext = { ...baseTemplateContext, ...context };
    const label = interpolateText(action.label, resolvedContext);
    const ariaLabel = interpolateText(action.ariaLabel, resolvedContext) || undefined;
    const value = interpolateText(
        resolveValueWithFallback(action.kind, action.value),
        resolvedContext
    );
    const message = interpolateText(action.message, resolvedContext);
    const subject = interpolateText(action.subject, resolvedContext);
    const body = interpolateText(action.body, resolvedContext);

    if (action.kind === "whatsapp") {
        return {
            kind: action.kind,
            label,
            ariaLabel,
            href: buildWhatsAppLink(value, message || undefined),
            target: "_blank",
            rel: "noopener noreferrer",
        };
    }

    if (action.kind === "phone") {
        return {
            kind: action.kind,
            label,
            ariaLabel,
            href: buildPhoneLink(value),
        };
    }

    if (action.kind === "email") {
        return {
            kind: action.kind,
            label,
            ariaLabel,
            href: buildEmailLink(value, subject || undefined, body || undefined),
        };
    }

    if (action.kind === "anchor") {
        return {
            kind: action.kind,
            label,
            ariaLabel,
            href: buildSectionHref(value),
        };
    }

    const openInNewTab = action.newTab ?? true;

    return {
        kind: action.kind,
        label,
        ariaLabel,
        href: value,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined,
    };
};

const defaultActionForMethod = (method: ContactMethodConfig) => {
    const common = {
        label: method.label,
        value: method.value,
        ariaLabel: method.ariaLabel ?? `${method.label}: ${method.value}`,
    };

    if (method.type === "whatsapp") {
        return {
            ...common,
            kind: "whatsapp" as const,
            newTab: true,
        };
    }

    if (method.type === "phone") {
        return {
            ...common,
            kind: "phone" as const,
        };
    }

    if (method.type === "email") {
        return {
            ...common,
            kind: "email" as const,
        };
    }

    return undefined;
};

const resolveMethodAction = (method: ContactMethodConfig) => {
    const action = method.action ?? defaultActionForMethod(method);

    if (!action) return undefined;

    return resolveActionLink(action, {
        contactValue: method.value,
        contactLabel: method.label,
    });
};

const resolveSocialLink = (link: SocialLinkConfig): ResolvedSocialLink => {
    const openInNewTab = link.newTab ?? true;

    return {
        ...link,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined,
    };
};

export const SITE_BRAND = SITE_CONFIG.brand;
export const SITE_THEME = SITE_CONFIG.theme;
export const SITE_LANGUAGE = SITE_CONFIG.seo.lang;
export const FONT_STYLESHEET_URL = SITE_THEME.fonts.googleFontsUrl;
export const THEME_STYLE_VARS = [
    `--theme-color-primary: ${SITE_THEME.colors.primary}`,
    `--theme-color-secondary: ${SITE_THEME.colors.secondary}`,
    `--theme-color-accent: ${SITE_THEME.colors.accent}`,
    `--theme-color-surface: ${SITE_THEME.colors.surface}`,
    `--theme-color-page: ${SITE_THEME.colors.page}`,
    `--theme-color-soft: ${SITE_THEME.colors.soft}`,
    `--theme-color-text: ${SITE_THEME.colors.text}`,
    `--theme-color-border: ${SITE_THEME.colors.border}`,
    `--theme-font-body: ${SITE_THEME.fonts.bodyFamily}`,
    `--theme-font-heading: ${SITE_THEME.fonts.headingFamily}`,
].join("; ");

export const NAVIGATION = {
    items: SITE_CONFIG.navigation.items.map((item) => ({
        ...item,
        href: buildSectionHref(item.section),
    })),
    cta: resolveActionLink(SITE_CONFIG.navigation.cta),
};

export const CONTACT_INFO = {
    methods: SITE_CONFIG.contact.methods.map<ResolvedContactMethod>((method) => ({
        ...method,
        actionLink: resolveMethodAction(method),
    })),
    socialLinks: SITE_CONFIG.contact.socialLinks.map(resolveSocialLink),
    primaryWhatsApp: fallbackWhatsApp,
    primaryPhone: fallbackPhone,
    primaryEmail: fallbackEmail,
};

export const SEO_INFO = SITE_CONFIG.seo;

export const HERO_SECTION = {
    ...SITE_CONFIG.sections.hero,
    primaryAction: resolveActionLink(SITE_CONFIG.sections.hero.primaryAction),
    secondaryAction: SITE_CONFIG.sections.hero.secondaryAction
        ? resolveActionLink(SITE_CONFIG.sections.hero.secondaryAction)
        : undefined,
};

export const ABOUT_SECTION = SITE_CONFIG.sections.about;

export const SERVICES_SECTION = {
    ...SITE_CONFIG.sections.services,
    resolveItemAction: (serviceTitle: string) =>
        resolveActionLink(SITE_CONFIG.sections.services.itemAction, {
            serviceTitle,
        }),
};

export const FEATURE_SECTION = {
    ...SITE_CONFIG.sections.feature,
    primaryAction: resolveActionLink(SITE_CONFIG.sections.feature.primaryAction),
};

export const CONTACT_SECTION = SITE_CONFIG.sections.contact;
export const FOOTER_INFO = SITE_CONFIG.footer;
export const FLOATING_ACTION = {
    ...SITE_CONFIG.floatingAction,
    action: resolveActionLink(SITE_CONFIG.floatingAction.action),
};

const removeEmptyValues = (value: unknown): unknown => {
    if (Array.isArray(value)) {
        const items = value
            .map((item) => removeEmptyValues(item))
            .filter((item) => item !== undefined);

        return items.length ? items : undefined;
    }

    if (value && typeof value === "object") {
        const entries = Object.entries(value)
            .map(([key, nestedValue]) => [key, removeEmptyValues(nestedValue)] as const)
            .filter(([, nestedValue]) => nestedValue !== undefined);

        return entries.length ? Object.fromEntries(entries) : undefined;
    }

    if (value === "" || value === null || value === undefined) {
        return undefined;
    }

    return value;
};

export const buildStructuredData = (canonicalURL: URL, image: string) => {
    const { structuredData } = SEO_INFO;

    return removeEmptyValues({
        "@context": "https://schema.org",
        "@type": structuredData.type,
        name: structuredData.name ?? SITE_BRAND.name,
        description: structuredData.description ?? SEO_INFO.description,
        image: new URL(structuredData.image ?? image, canonicalURL).toString(),
        url: canonicalURL.toString(),
        telephone: structuredData.telephone ?? CONTACT_INFO.primaryPhone,
        email: structuredData.email ?? CONTACT_INFO.primaryEmail,
        sameAs: structuredData.sameAs,
        address: structuredData.address
            ? {
                  "@type": "PostalAddress",
                  ...structuredData.address,
              }
            : undefined,
        geo: structuredData.geo
            ? {
                  "@type": "GeoCoordinates",
                  ...structuredData.geo,
              }
            : undefined,
        openingHoursSpecification: structuredData.openingHours?.map((openingHours) => ({
            "@type": "OpeningHoursSpecification",
            ...openingHours,
        })),
        contactPoint: structuredData.contactPoints?.map((contactPoint) => ({
            "@type": "ContactPoint",
            ...contactPoint,
        })),
        priceRange: structuredData.priceRange,
    });
};

export const buildSectionLabel = (sectionKey: SectionKey) => SECTION_IDS[sectionKey];

export const isInteractiveContactMethod = (type: ContactMethodType) =>
    type === "whatsapp" || type === "phone" || type === "email" || type === "custom";

export { buildWhatsAppLink };
