// @ts-check

const CONTACT_MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3977.303764697331!2d-75.6788722!3d4.5392319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5080d4f05c7%3A0xb9616a8dec249b8b!2sTaller%20Nasa%20Armenia!5e0!3m2!1ses!2sco!4v1774561257114!5m2!1ses!2sco";
const SITE_URL = (process.env.PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://www.tallernasaarmenia.com/")
    .replace(/\/+$/, "");

/** @type {import("./src/types/site").SiteConfig} */
export const SITE_CONFIG = {
    brand: {
        name: "Nasa",
        subtitle: "Taller",
        logo: {
            src: "/logo.png",
            alt: "Logo de Taller Nasa",
        },
        favicon: "/icon.png",
    },
    theme: {
        colors: {
            primary: "#E00000",
            secondary: "#1F3056",
            accent: "#E84545",
            surface: "#FFFFFF",
            page: "#F6F8FC",
            soft: "#FFF4F4",
            text: "#31415F",
            border: "#D7DEEA",
        },
        fonts: {
            bodyFamily: '"Manrope", sans-serif',
            headingFamily: '"Oswald", sans-serif',
            googleFontsUrl:
                "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Oswald:wght@400;500;600;700&display=swap",
        },
    },
    navigation: {
        items: [
            { label: "Inicio", section: "home" },
            { label: "Nosotros", section: "about" },
            { label: "Servicios", section: "services" },
            { label: "Contacto", section: "contact" },
        ],
        cta: {
            label: "Agenda tu cita",
            kind: "anchor",
            value: "contact",
            ariaLabel: "Ir a la sección de contacto",
        },
    },
    contact: {
        methods: [
            {
                label: "WhatsApp",
                value: "+57 323 366 1675",
                type: "whatsapp",
                icon: "whatsapp",
                description: "Respuesta rápida para cotizaciones y citas",
            },
            {
                label: "Teléfono",
                value: "+57 323 366 1675",
                type: "phone",
                icon: "phone",
                description: "Llámanos para programar tu revisión",
            },
            {
                label: "Correo",
                value: "hola@nexastudio.com",
                type: "email",
                icon: "mail",
                description: "Canal alterno para consultas y solicitudes",
            },
            {
                label: "Dirección",
                value: "Cl. 15 #21a-03, Armenia, Quindío",
                type: "location",
                icon: "map-pin",
            },
        ],
        socialLinks: [
            {
                label: "Instagram",
                url: "https://instagram.com/",
                icon: "instagram",
                ariaLabel: "Visitar Instagram",
            },
            {
                label: "Facebook",
                url: "https://facebook.com/",
                icon: "facebook",
                ariaLabel: "Visitar Facebook",
            },
            {
                label: "Sitio web",
                url: SITE_URL,
                icon: "globe",
                ariaLabel: "Visitar sitio web principal",
            },
        ],
    },
    seo: {
        lang: "es",
        siteUrl: SITE_URL,
        title: "Taller Nasa Armenia | Mecánica general para tu vehículo",
        description:
            "Taller mecánico en Armenia, Quindío. Realizamos mantenimiento preventivo, sincronización, frenos, cambio de aceite y suspensión con atención clara y confiable.",
        keywords: [
            "taller mecanico en armenia",
            "taller mecanico armenia quindio",
            "mecanico en armenia",
            "mecanica general en armenia",
            "taller automotriz en armenia",
            "mantenimiento preventivo en armenia",
            "sincronizacion en armenia",
            "sincronizacion carro armenia",
            "cambio de aceite en armenia",
            "frenos en armenia",
            "reparacion de frenos en armenia",
            "suspension en armenia",
            "reparacion de suspension en armenia",
            "diagnostico automotriz en armenia",
            "servicio automotriz en armenia",
            "taller para carros en armenia",
            "mantenimiento de carros en armenia",
            "Taller Nasa Armenia",
        ],
        image: {
            src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600",
            alt: "Vehículo en proceso de revisión en taller mecánico",
        },
        locale: "es_CO",
        structuredData: {
            type: "LocalBusiness",
            telephone: "+57 323 366 1675",
            sameAs: [
                "https://instagram.com/",
                "https://facebook.com/",
                SITE_URL,
            ],
            address: {
                streetAddress: "Cl. 15 #21a-03",
                addressLocality: "Armenia",
                addressRegion: "Quindío",
                addressCountry: "CO",
            },
            contactPoints: [
                {
                    contactType: "customer support",
                    telephone: "+57 323 366 1675",
                    email: "hola@nexastudio.com",
                    areaServed: "Armenia, Quindío",
                    availableLanguage: ["Spanish"],
                },
            ],
        },
    },
    sections: {
        hero: {
            badge: "Servicio confiable en Armenia",
            title: "Taller Nasa",
            highlight: "TALLER",
            description:
                "Brindamos mantenimiento y reparaciones mecánicas con procesos claros, tiempos responsables y atención confiable para el uso diario.",
            primaryAction: {
                label: "Agenda por WhatsApp",
                kind: "whatsapp",
                message:
                    "Hola, quiero agendar una revisión para mi vehículo.",
                ariaLabel: "Abrir conversación de WhatsApp",
                newTab: true,
            },
            secondaryAction: {
                label: "Ver servicios",
                kind: "anchor",
                value: "services",
            },
            image: {
                src: "/logo-principal.webp",
                alt: "Logo principal de Taller Nasa",
            },
        },
        about: {
            badge: "Nosotros",
            title: "Un taller de confianza para el mantenimiento de tu vehículo",
            description:
                "Somos un taller mecánico de servicio cercano, enfocado en diagnósticos precisos y soluciones efectivas para mantener tu vehículo en óptimas condiciones.",
            image: {
                src: "/local.webp",
                alt: "Vista del local de Taller Nasa",
            },
            highlights: [
                {
                    title: "Diagnóstico claro",
                    description:
                        "Realizamos una evaluación técnica inicial y te explicamos, de forma transparente, el estado real de tu vehículo.",
                    icon: "sparkles",
                },
                {
                    title: "Trabajo responsable",
                    description:
                        "Ejecutamos cada servicio con criterios de seguridad, orden y seguimiento para ofrecer resultados consistentes.",
                    icon: "shield-check",
                },
            ],
        },
        services: {
            badge: "Servicios",
            title: "Servicios esenciales para mantener tu vehículo en buen estado",
            description:
                "Atendemos los servicios más solicitados con procedimientos claros, repuestos adecuados y recomendaciones orientadas al cuidado del vehículo.",
            itemAction: {
                label: "Cotizar servicio",
                kind: "whatsapp",
                message:
                    "Hola, quiero cotizar {{serviceTitle}} para mi vehículo.",
                newTab: true,
            },
            navigationLabels: {
                previous: "Ver servicio anterior",
                next: "Ver siguiente servicio",
            },
            items: [
                {
                    title: "Mantenimiento preventivo",
                    description:
                        "Revisión periódica para anticipar fallas y extender la vida útil del vehículo.",
                    image: {
                        src: "/servicio1.webp",
                        alt: "Mecánico realizando mantenimiento preventivo en motor",
                    },
                },
                {
                    title: "Sincronización",
                    description:
                        "Ajuste de motor para mejorar el rendimiento, estabilizar el encendido y reducir consumo.",
                    image: {
                        src: "/servicio2.webp",
                        alt: "Ajuste de sincronización en taller mecánico",
                    },
                },
                {
                    title: "Frenos",
                    description:
                        "Inspección y cambio de pastillas o rectificación cuando aplica para frenar con seguridad.",
                    image: {
                        src: "/servicio3.webp",
                        alt: "Servicio de revisión y ajuste de frenos",
                    },
                },
                {
                    title: "Cambio de aceite",
                    description:
                        "Cambio de aceite y filtro según especificación para proteger el motor en uso diario.",
                    image: {
                        src: "/servicio4.jpeg",
                        alt: "Cambio de aceite de motor en elevador",
                    },
                },
                {
                    title: "Suspensión",
                    description:
                        "Revisión de amortiguadores y componentes para mejorar estabilidad y confort de manejo.",
                    image: {
                        src: "/servicio5.jpeg",
                        alt: "Revisión del sistema de suspensión del vehículo",
                    },
                },
            ],
        },
        contact: {
            badge: "Contacto",
            title: "Visítanos en Armenia o agenda tu cita por WhatsApp",
            card: {
                eyebrow: "Estamos listos para atender tu vehículo",
                description:
                    "Atendemos en Armenia, Quindío, con enfoque en diagnóstico, mantenimiento preventivo y reparación mecánica general.",
                supportingText:
                    "Puedes contactarnos por WhatsApp, llamada o correo para resolver dudas y coordinar tu cita.",
                closingText:
                    "Nuestro objetivo es entregarte una solución técnica confiable y una atención profesional en cada visita.",
            },
            visual: {
                type: "map",
                embedUrl: CONTACT_MAP_EMBED_URL,
                title: "Ubicación de Taller Nasa Armenia en Google Maps",
            },
        },
    },
    footer: {
        brandDescription:
            "Taller mecánico en Armenia enfocado en mantenimiento preventivo y reparaciones esenciales con atención cercana y responsable.",
        navigationTitle: "Navegación",
        contactTitle: "Contacto",
        socialTitle: "Síguenos",
        socialDescription:
            "Conoce novedades del taller y canales de atención en nuestras redes.",
    },
    floatingAction: {
        icon: "whatsapp",
        srLabel: "Abrir WhatsApp para agendar cita",
        action: {
            label: "Contacto rápido",
            kind: "whatsapp",
            message:
                "Hola, quiero cotizar un servicio y agendar una cita.",
            newTab: true,
        },
    },
};

export default SITE_CONFIG;
