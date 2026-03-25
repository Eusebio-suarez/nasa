# Guia de Estructura del Proyecto

## 1. Objetivo

Esta guia define como organizar un proyecto similar a este a nivel de carpetas, componentes, constantes, datos compartidos y reglas de composicion. La idea es que pueda aplicarse en otro proyecto ya existente sin obligar a rehacer toda su arquitectura.

## 2. Enfoque General

La estructura actual sigue una separacion simple y escalable:

- `pages` arma paginas.
- `layout` contiene piezas globales.
- `sections` agrupa bloques de pagina.
- `ui` contiene componentes reutilizables.
- `data` centraliza contenido y constantes compartidas.
- `styles` define tokens y reglas globales.

Este patron funciona muy bien para sitios institucionales, landing pages, webs de servicios o proyectos con pocas paginas y muchas secciones reutilizables.

## 3. Estructura Base Recomendada

```text
/
├── public/
├── docs/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   └── styles/
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

Regla:

- Evitar archivos de componentes sueltos en la raiz del proyecto.
- Todo componente de aplicacion debe vivir dentro de `src/`.
- La raiz debe reservarse para configuracion, dependencias y documentacion.

## 4. Responsabilidad por Carpeta

### 4.1 `public/`

Guardar assets estaticos:

- logos
- favicons
- imagenes locales
- archivos publicos

Regla:

- Solo poner aqui archivos que deban exponerse tal cual.
- No guardar logica ni configuracion.

### 4.2 `docs/`

Documentacion interna del proyecto:

- guias de UI
- guias de estructura
- decisiones tecnicas
- reglas de implementacion

Regla:

- Toda convencion importante del proyecto debe quedar documentada aqui.

### 4.3 `src/pages/`

Punto de entrada de cada pagina.

Responsabilidad:

- importar estilos globales
- ensamblar layout y secciones
- definir metadata general de la pagina si aplica

Regla:

- Las paginas no deben contener mucha logica visual.
- Deben funcionar como compositores de alto nivel.

Ejemplo:

```astro
---
import "../styles/global.css";
import Navbar from "../components/layout/Navbar.astro";
import Hero from "../components/sections/Hero/Hero.astro";
import Footer from "../components/layout/Footer.astro";
---

<html lang="es">
  <body>
    <Navbar />
    <Hero />
    <Footer />
  </body>
</html>
```

### 4.4 `src/components/layout/`

Componentes globales que afectan toda la pagina o varias paginas.

Ejemplos actuales:

- `Navbar.astro`
- `Footer.astro`
- `SEO.astro`

Regla:

- Aqui van componentes estructurales, no bloques de contenido de una sola seccion.

Subestructura recomendada:

```text
src/components/layout/
├── Navbar.astro
├── Footer.astro
├── SEO.astro
└── Footer/
    ├── FooterBrand.astro
    ├── FooterNavigation.astro
    ├── FooterContact.astro
    ├── FooterSocial.astro
    └── FooterBackground.astro
```

### 4.5 `src/components/sections/`

Bloques principales de una pagina.

Ejemplos actuales:

- `Hero`
- `About`
- `Services`
- `Contact`

Patron recomendado:

- un archivo raiz por seccion
- una subcarpeta interna con subcomponentes de esa seccion

Ejemplo:

```text
src/components/sections/
├── About.astro
├── Contact.astro
├── Services.astro
├── Hero/
│   ├── Hero.astro
│   ├── HeroContent.astro
│   ├── HeroImage.astro
│   └── HeroDecorations.astro
├── About/
│   ├── AboutContent.astro
│   ├── AboutMedia.astro
│   └── AboutHighlights.astro
├── Services/
│   ├── ServicesHeader.astro
│   ├── ServicesCarousel.astro
│   ├── ServiceCard.astro
│   └── HomeVisitBanner.astro
└── Contact/
    ├── ContactHeader.astro
    ├── ContactCard.astro
    ├── ContactCardHeader.astro
    ├── ContactInfoList.astro
    └── ContactMap.astro
```

Regla:

- La seccion raiz define contenedor, fondo, spacing y ensamblaje.
- Los subcomponentes resuelven piezas concretas del bloque.

### 4.6 `src/components/ui/`

Componentes pequenos y reutilizables, independientes del contexto.

Ejemplos actuales:

- `Button.astro`
- `Icon.astro`
- `FloatingWhatsAppButton.astro`
- `WhatsAppLogo.astro`

Regla:

- Un componente de `ui` debe poder reutilizarse en varias secciones.
- No debe contener datos de una sola seccion salvo que sea un wrapper tecnico muy puntual.

### 4.7 `src/data/`

Fuente central de constantes y contenido reutilizable.

Ejemplo actual:

- `site.ts`

Hoy centraliza:

- informacion general del sitio
- datos de contacto
- links de navegacion
- lista de servicios
- helper para construir enlaces de WhatsApp

Regla:

- Si un dato se usa en varias partes, no debe repetirse dentro de componentes.

### 4.8 `src/styles/`

Reglas globales de estilo.

Ejemplo actual:

- `global.css`

Responsabilidad:

- importar framework de estilos
- definir tokens globales
- definir utilidades de animacion o helpers compartidos

Regla:

- Los estilos globales deben contener solo base comun.
- Los estilos muy especificos de una seccion pueden vivir en esa seccion si no son reutilizables.

## 5. Patron de Composicion de Componentes

### 5.1 Nivel pagina

La pagina importa layout global + secciones.

Responsabilidad:

- orden visual
- metadata general
- inclusion de estilos globales

### 5.2 Nivel seccion

La seccion define:

- `section id`
- fondo
- padding vertical
- contenedor principal
- grid o layout interno
- ensamblaje de piezas

Ejemplo conceptual:

```astro
<section id="servicios" class="section-ui">
  <div class="container-ui">
    <ServicesHeader />
    <ServicesCarousel />
  </div>
</section>
```

### 5.3 Nivel subcomponente

Cada subcomponente debe tener una sola responsabilidad clara.

Ejemplos:

- `HeroContent`: contenido textual y CTAs del hero
- `HeroImage`: bloque visual del hero
- `ContactHeader`: titulo y subtitulo de la seccion
- `ContactCard`: shell visual de la tarjeta
- `ContactInfoList`: lista de datos de contacto

### 5.4 Nivel UI

Los componentes de UI encapsulan patrones repetidos:

- botones
- iconos
- logos
- acciones flotantes

Regla:

- La logica de variantes debe vivir aqui y no repetirse en cada seccion.

## 6. Organizacion de Constantes y Datos

### 6.1 Estructura minima recomendada

Para un proyecto pequeno, se puede centralizar en un solo archivo:

```text
src/data/
└── site.ts
```

Para un proyecto mediano o cuando crezca el contenido, conviene separar:

```text
src/data/
├── site.ts
├── navigation.ts
├── contact.ts
├── services.ts
└── social.ts
```

### 6.2 Que debe ir en `data`

- nombre del sitio
- subtitulo
- logo
- informacion de contacto
- enlaces a redes
- menu de navegacion
- listas de servicios
- textos de negocio que se repiten

### 6.3 Que no debe ir en `data`

- clases de estilos
- marcado HTML
- decisiones de layout
- estados locales de un componente

### 6.4 Helpers permitidos en `data`

Se permiten helpers pequenos y puros relacionados con el dato.

Ejemplo valido:

```ts
const normalizePhoneNumber = (phone: string) => phone.replace(/\D+/g, "");

export const buildWhatsAppLink = (phone: string, message?: string) => {
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${normalizePhoneNumber(phone)}${query}`;
};
```

Regla:

- Si la funcion solo transforma datos y es usada por varios componentes, puede vivir junto al dato.
- Si la logica crece, moverla a `src/lib/` o `src/utils/`.

## 7. Convenciones de Nombres

### 7.1 Componentes

- PascalCase
- nombre descriptivo segun responsabilidad

Ejemplos:

- `HeroContent.astro`
- `ServiceCard.astro`
- `FooterNavigation.astro`

### 7.2 Archivos de datos

- nombre corto y claro
- singular o plural segun contenido

Ejemplos:

- `site.ts`
- `services.ts`
- `navigation.ts`

### 7.3 Constantes exportadas

- `UPPER_SNAKE_CASE` para colecciones o bloques estaticos
- nombres expresivos

Ejemplos:

- `SITE_INFO`
- `CONTACT_INFO`
- `NAV_LINKS`
- `SERVICES`

### 7.4 Funciones auxiliares

- camelCase
- accion + objeto

Ejemplos:

- `buildWhatsAppLink`
- `normalizePhoneNumber`

## 8. Reglas de Escalabilidad

### 8.1 Cuando crear un subcomponente

Crear un subcomponente si:

- el bloque supera un nivel de complejidad razonable
- una pieza puede reutilizarse dentro de la misma seccion
- una parte visual tiene responsabilidad propia
- el archivo raiz de la seccion ya es dificil de leer

### 8.2 Cuando no fragmentar mas

No dividir si:

- el bloque es muy pequeno
- la extraccion crea archivos innecesarios
- el subcomponente solo seria un wrapper sin valor semantico

### 8.3 Limite practico

Una seccion raiz debe leerse como un ensamblador claro. Si empieza a mezclar:

- contenido
- animaciones
- logica de datos
- sublayouts complejos

entonces conviene repartir responsabilidades.

## 9. Propuesta Portable para Otro Proyecto Similar

Si el otro proyecto ya existe, no hace falta copiar exactamente esta estructura. Lo correcto es mapearla.

### 9.1 Si el proyecto ya tiene carpeta `components`

Mapeo sugerido:

- componentes globales -> `components/layout`
- bloques de pagina -> `components/sections`
- piezas reutilizables -> `components/ui`

### 9.2 Si el proyecto ya tiene `constants` en lugar de `data`

Mapeo sugerido:

- `src/data/site.ts` -> `src/constants/site.ts`
- listas y configuraciones compartidas -> `constants`
- contenido editable o mas cercano a CMS -> `data`

### 9.3 Si el proyecto ya usa `features`

Mapeo sugerido:

- mantener `features` para dominios grandes
- usar `ui` para componentes comunes
- usar `layout` para estructura global
- usar `content` o `data` para contenido transversal

## 10. Estructura Recomendada para Proyecto Mediano

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── SEO.astro
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   └── Contact/
│   └── ui/
│       ├── Button.astro
│       ├── Icon.astro
│       └── FloatingWhatsAppButton.astro
├── data/
│   ├── site.ts
│   ├── contact.ts
│   ├── navigation.ts
│   └── services.ts
├── lib/
│   ├── links.ts
│   └── formatters.ts
├── pages/
│   └── index.astro
└── styles/
    ├── global.css
    └── tokens.css
```

## 11. Flujo de Dependencias Recomendado

Direccion recomendada:

- `pages` puede importar `layout`, `sections`, `ui`, `data`, `styles`
- `layout` puede importar `ui` y `data`
- `sections` puede importar `ui` y `data`
- `ui` idealmente no debe depender de `sections`
- `data` no debe depender de componentes

Regla clave:

- evitar dependencias cruzadas entre secciones

Ejemplo correcto:

- `Services.astro` importa `ServiceCard.astro`

Ejemplo a evitar:

- `ContactCard.astro` importando `HeroContent.astro`

## 12. Regla para Contenido vs Presentacion

Separar siempre:

- contenido del negocio
- estructura visual
- componentes base reutilizables

Aplicado al proyecto:

- textos generales y listas viven en `data`
- distribucion de bloques vive en `sections`
- botones e iconos viven en `ui`
- elementos globales viven en `layout`

## 13. Checklist para Implementarlo en Otro Proyecto

- Existe una carpeta para paginas o rutas.
- Existe una carpeta para layout global.
- Existe una carpeta para secciones de pagina.
- Existe una carpeta para UI reutilizable.
- Los datos repetidos salen de los componentes.
- Las constantes globales tienen un lugar unico.
- Los nombres de componentes siguen una convencion estable.
- Las secciones no se importan entre si.
- Los componentes UI no dependen de componentes de negocio.
- La pagina principal solo compone, no concentra toda la implementacion.

## 14. Resultado Esperado

Aplicando esta estructura en otro proyecto similar se obtiene:

- codigo mas facil de leer
- mejor separacion de responsabilidades
- menos duplicacion de contenido
- crecimiento ordenado de nuevas secciones
- mayor reutilizacion de componentes
- mantenimiento mas simple para nuevos cambios
