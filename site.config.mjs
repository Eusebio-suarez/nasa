// @ts-check

/** @type {import("./src/types/site").SiteConfig} */
export const SITE_CONFIG = {
    brand: {
        name: "Nexa Studio",
        subtitle: "Servicios profesionales",
        logo: {
            src: "/template-mark.svg",
            alt: "Logo de Nexa Studio",
        },
        favicon: "/template-mark.svg",
    },
    theme: {
        colors: {
            primary: "#5dcb6c",
            secondary: "#1c7ba9",
            accent: "#f59e0b",
            surface: "#ffffff",
            page: "#f8fafc",
            soft: "#fdfcfb",
            text: "#475569",
            border: "#e2e8f0",
        },
        fonts: {
            bodyFamily: '"Inter", sans-serif',
            headingFamily: '"Outfit", sans-serif',
            googleFontsUrl:
                "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap",
        },
    },
    navigation: {
        items: [
            { label: "Inicio", section: "home" },
            { label: "Nosotros", section: "about" },
            { label: "Servicios", section: "services" },
            { label: "Destacado", section: "feature" },
            { label: "Contacto", section: "contact" },
        ],
        cta: {
            label: "Agenda una llamada",
            kind: "anchor",
            value: "contact",
            ariaLabel: "Ir a la sección de contacto",
        },
    },
    contact: {
        methods: [
            {
                label: "WhatsApp",
                value: "+57 321 555 0198",
                type: "whatsapp",
                icon: "whatsapp",
                description: "Respuesta rápida para dudas y cotizaciones",
            },
            {
                label: "Teléfono",
                value: "+57 601 555 0101",
                type: "phone",
                icon: "phone",
                description: "Horario de atención de lunes a viernes",
            },
            {
                label: "Correo",
                value: "hola@nexastudio.com",
                type: "email",
                icon: "mail",
                description: "Cuéntanos tu proyecto con el mayor contexto posible",
            },
            {
                label: "Cobertura",
                value: "Atención remota para Latinoamérica y reuniones presenciales en Colombia",
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
                url: "https://example.com",
                icon: "globe",
                ariaLabel: "Visitar sitio web principal",
            },
        ],
    },
    seo: {
        lang: "es",
        siteUrl: "https://example.com",
        title: "Nexa Studio | Servicios profesionales para marcas en crecimiento",
        description:
            "Plantilla multipropósito para negocios de servicios. Centraliza branding, textos, SEO, contacto e imágenes desde un solo archivo editable.",
        keywords: [
            "plantilla web",
            "landing page",
            "servicios profesionales",
            "sitio institucional",
            "astro template",
        ],
        image: {
            src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600",
            alt: "Espacio de trabajo profesional con portátil y libreta",
        },
        locale: "es_CO",
        structuredData: {
            type: "Organization",
            sameAs: [
                "https://instagram.com/",
                "https://facebook.com/",
                "https://example.com",
            ],
            contactPoints: [
                {
                    contactType: "customer support",
                    telephone: "+57 321 555 0198",
                    email: "hola@nexastudio.com",
                    areaServed: "Latinoamérica",
                    availableLanguage: ["Spanish"],
                },
            ],
        },
    },
    sections: {
        hero: {
            badge: "Acompañamiento estratégico",
            title: "Creamos experiencias digitales claras para negocios",
            highlight: "que quieren crecer con orden",
            description:
                "Esta plantilla está pensada para adaptar branding, mensajes, SEO, contacto e imágenes desde un único archivo, sin volver a perseguir textos escondidos por todo el proyecto.",
            primaryAction: {
                label: "Hablemos por WhatsApp",
                kind: "whatsapp",
                message:
                    "Hola, quiero información sobre sus servicios y una propuesta para mi negocio.",
                ariaLabel: "Abrir conversación de WhatsApp",
                newTab: true,
            },
            secondaryAction: {
                label: "Ver servicios",
                kind: "anchor",
                value: "services",
            },
            image: {
                src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
                alt: "Equipo revisando estrategia y diseño en una mesa de trabajo",
            },
        },
        about: {
            badge: "Nosotros",
            title: "Una base sólida para presentar tu propuesta de valor",
            description:
                "La estructura conserva una narrativa simple: presentar la marca, construir confianza, explicar servicios, destacar una oferta y cerrar con un bloque de contacto claro.",
            image: {
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
                alt: "Equipo colaborando frente a un tablero con ideas",
            },
            highlights: [
                {
                    title: "Mensajes centralizados",
                    description:
                        "Nombre de marca, subtítulos, títulos, párrafos y CTA viven en la configuración principal.",
                    icon: "sparkles",
                },
                {
                    title: "Fácil de reutilizar",
                    description:
                        "Cambiar colores, imágenes, contacto o SEO no exige entrar a editar los componentes.",
                    icon: "shield-check",
                },
            ],
        },
        services: {
            badge: "Servicios",
            title: "Bloques listos para explicar tu oferta con claridad",
            description:
                "Usa esta sección para mostrar tus servicios principales con títulos, descripciones, imágenes y una acción coherente con tu canal de conversión.",
            itemAction: {
                label: "Solicitar información",
                kind: "whatsapp",
                message:
                    "Hola, quiero más información sobre {{serviceTitle}}.",
                newTab: true,
            },
            navigationLabels: {
                previous: "Ver servicio anterior",
                next: "Ver siguiente servicio",
            },
            items: [
                {
                    title: "Diagnóstico y estrategia",
                    description:
                        "Aterrizamos tus objetivos, detectamos prioridades y definimos una hoja de ruta accionable.",
                    image: {
                        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
                        alt: "Reunión estratégica con documentos y portátil",
                    },
                },
                {
                    title: "Implementación",
                    description:
                        "Convertimos el plan en entregables claros, medibles y listos para ponerse en marcha.",
                    image: {
                        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
                        alt: "Persona trabajando en la implementación de un proyecto digital",
                    },
                },
                {
                    title: "Optimización continua",
                    description:
                        "Acompañamos la mejora de resultados con ajustes, seguimiento y nuevas oportunidades.",
                    image: {
                        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
                        alt: "Panel con métricas y gráficos de desempeño",
                    },
                },
            ],
        },
        feature: {
            badge: "Oferta destacada",
            title: "Soporte cercano para acompañar la implementación de punta a punta",
            description:
                "Este bloque sirve para destacar un servicio premium, un paquete clave o una promesa diferencial con beneficios concretos y una acción directa.",
            image: {
                src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200",
                alt: "Consultora acompañando a una clienta durante una reunión",
            },
            benefits: [
                {
                    title: "Respuesta rápida",
                    description:
                        "Canal directo para resolver dudas y mover el proyecto sin fricción.",
                    icon: "headphones",
                },
                {
                    title: "Acompañamiento experto",
                    description:
                        "Decisiones mejor respaldadas con criterio, contexto y seguimiento.",
                    icon: "badge-check",
                },
                {
                    title: "Siguiente paso claro",
                    description:
                        "Cada entrega deja definido qué sigue y cómo medir el avance.",
                    icon: "rocket",
                },
            ],
            primaryAction: {
                label: "Solicitar propuesta",
                kind: "email",
                subject: "Quiero una propuesta para mi proyecto",
                body: "Hola, me gustaría conocer su servicio destacado y recibir una propuesta.",
            },
            secondaryCard: {
                icon: "clock",
                title: "Acompañamiento priorizado",
                description: "Ideal para proyectos que necesitan velocidad y claridad.",
            },
        },
        contact: {
            badge: "Contacto",
            title: "Conversemos sobre tu próximo proyecto",
            card: {
                eyebrow: "Estamos listos para ayudarte",
                description:
                    "Configura este bloque con tus canales reales y deja que toda la plantilla se actualice desde un solo lugar.",
                supportingText:
                    "Puedes usar WhatsApp, teléfono, correo, una dirección física o cualquier otro método relevante para tu negocio.",
                closingText:
                    "Haz que tu equipo solo cambie la configuración, no los componentes.",
            },
            visual: {
                type: "image",
                image: {
                    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
                    alt: "Equipo conversando en una sala de reuniones luminosa",
                },
            },
        },
    },
    footer: {
        brandDescription:
            "Usa este espacio para resumir tu propuesta de valor y reforzar la personalidad de marca con un mensaje breve y fácil de reemplazar.",
        navigationTitle: "Navegación",
        contactTitle: "Contacto",
        socialTitle: "Síguenos",
        socialDescription:
            "Centraliza aquí los enlaces de tus redes o canales externos desde la configuración principal.",
    },
    floatingAction: {
        icon: "message-square",
        srLabel: "Abrir canal de contacto rápido",
        action: {
            label: "Contacto rápido",
            kind: "whatsapp",
            message:
                "Hola, quiero más información sobre sus servicios.",
            newTab: true,
        },
    },
};

export default SITE_CONFIG;
