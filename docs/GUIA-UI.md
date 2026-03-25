# Guia de Diseno de Interfaz UI

## 1. Objetivo

Esta guia define una estructura de UI reutilizable basada en el patron visual actual del proyecto. Su objetivo es servir como referencia para implementar la misma logica visual en otro proyecto ya existente, manteniendo consistencia en tipografia, espaciados, layout y comportamiento responsive.

## 2. Principios Base

- Interfaz limpia, profesional y cercana.
- Jerarquia visual muy clara entre titulos, subtitulos y contenido.
- Bloques amplios con buen aire visual.
- Componentes reutilizables y faciles de mapear a otro sistema de estilos.
- Responsive mobile-first.

## 3. Tokens de Diseno

### 3.1 Colores

Usar variables globales para no acoplar el diseno a un framework especifico.

```css
:root {
  --color-brand-green: #5dcb6c;
  --color-brand-blue: #1c7ba9;
  --color-bg-page: #f8fafc;
  --color-bg-soft: #fdfcfb;
  --color-surface: #ffffff;
  --color-text-primary: #334155;
  --color-text-secondary: #64748b;
  --color-border-soft: #e2e8f0;
}
```

### 3.2 Tipografias

- Titulos: `Outfit`, sans-serif.
- Texto base: `Inter`, sans-serif.

```css
:root {
  --font-heading: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

## 4. Escala Tipografica

### 4.1 Titulo principal `H1`

- Mobile: `48px`
- Desktop: `72px`
- Peso: `900`
- Interlineado: `0.95`
- Tracking: ligeramente cerrado
- Uso: portada o seccion principal

### 4.2 Subtitulo destacado dentro del hero

- Mobile: `36px`
- Desktop: `60px`
- Peso: `500`
- Estilo: italic
- Uso: segunda linea del mensaje principal

### 4.3 Titulos de seccion `H2`

- Mobile: `36px`
- Desktop: `48px`
- Peso: `700`
- Interlineado: `1.1 - 1.2`
- Uso: encabezado de secciones como Nosotros, Servicios, Contacto

### 4.4 Titulo de bloque o tarjeta `H3`

- Base: `20px`
- Peso: `700`
- Uso: cards, bloques internos, items destacados

### 4.5 Texto introductorio o lead

- Base: `20px`
- Interlineado: `1.7`
- Uso: texto descriptivo principal debajo del `H1`

### 4.6 Texto de parrafo

- Base: `18px`
- Interlineado: `1.7`
- Uso: contenido de secciones

### 4.7 Texto secundario en tarjetas

- Base: `14px`
- Interlineado: `1.6`
- Uso: descripcion corta en cards o microcontenido

### 4.8 Eyebrow o etiqueta superior

- Tamano: `10px`
- Peso: `700`
- Transformacion: `uppercase`
- Espaciado entre letras: `0.2em`
- Uso: etiqueta visual antes del titulo de seccion

## 5. Espaciado y Margenes

### 5.1 Contenedor principal

- Ancho maximo: `1280px`
- Centrado horizontal: `margin: 0 auto`
- Padding horizontal mobile: `24px`
- Padding horizontal tablet/desktop: `48px`

Referencia portable:

```css
.container-ui {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 768px) {
  .container-ui {
    padding-left: 48px;
    padding-right: 48px;
  }
}
```

### 5.2 Espaciado vertical por seccion

- Padding superior e inferior estandar: `96px`
- Secciones hero: minimo alto de pantalla menos altura de navbar
- Separacion entre bloques internos grandes: `48px` a `64px`

### 5.3 Margenes recomendados entre elementos

- Eyebrow a titulo: `32px`
- Titulo a texto: `24px` a `32px`
- Texto a CTA: `40px`
- Entre CTAs: `20px`
- Entre columnas de layout: `48px`
- Entre columnas amplias en desktop: `64px`

## 6. Estructura de Layout

### 6.1 Navbar

- Altura fija: `80px`
- Posicion: sticky
- Fondo: blanco con ligera transparencia
- Borde inferior suave
- Padding horizontal igual al contenedor

### 6.2 Hero

- Altura minima: `calc(100vh - 120px)`
- Layout:
  - Mobile: 1 columna
  - Desktop: 2 columnas
- Proporcion recomendada en desktop:
  - contenido: `1.08fr`
  - imagen: `0.92fr`
- Gap base: `48px`
- Gap amplio: `64px`

### 6.3 Secciones de contenido

Patron recomendado:

1. Eyebrow
2. Titulo de seccion
3. Parrafo descriptivo
4. Grid o bloque de contenido

Estructura base:

```html
<section class="section-ui">
  <div class="container-ui">
    <div class="section-header">
      <span class="eyebrow">Etiqueta</span>
      <h2>Titulo de seccion</h2>
      <p>Descripcion breve.</p>
    </div>

    <div class="section-content">
      <!-- columnas, cards, imagen + texto, etc -->
    </div>
  </div>
</section>
```

### 6.4 Grids

- Layout 2 columnas para contenido editorial: `1fr 1fr`
- Layout responsive:
  - Mobile: 1 columna
  - Desktop: 2 columnas
- Cards de servicios:
  - Mobile: 1 card por fila
  - Tablet: 2 cards por fila
  - Desktop: 3 cards por fila

## 7. Componentes Base

### 7.1 Botones

#### Boton primario

- Fondo: verde de marca
- Texto: blanco
- Border radius: muy redondeado, tipo pill
- Peso: `700`
- Interaccion: hover con sombra y ligero cambio de tono

#### Boton outline

- Fondo: blanco
- Texto: azul de marca
- Borde: suave
- Hover: fondo azul y texto blanco

#### Escalas sugeridas

- Small: `14px`, `24px` horizontal, `10px` vertical
- Medium: `16px`, `32px` horizontal, `14px` vertical
- Large: `18px`, `40px` horizontal, `20px` vertical

### 7.2 Cards

- Fondo: blanco
- Border radius: `32px`
- Borde: muy suave
- Sombra: media
- Hover: elevacion ligera
- Padding interno: `32px`
- Imagen superior opcional con alto fijo `256px`

### 7.3 Etiqueta superior

- Fondo: color de marca con opacidad suave
- Padding: `16px` horizontal, `8px` vertical
- Forma: capsula
- Uso antes del titulo principal de una seccion

## 8. Responsive

### 8.1 Breakpoints sugeridos

- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`

### 8.2 Reglas responsive

- Todo debe empezar en mobile-first.
- Los titulos deben escalar solo en `md` o superior.
- Los grids pasan de 1 columna a 2 columnas en `lg`.
- Carruseles o cards pueden pasar a 2 columnas desde `sm` y 3 columnas en `lg`.
- Padding horizontal:
  - mobile: `24px`
  - desktop: `48px`
- Las CTA en mobile deben apilarse en columna si no caben con comodidad.

## 9. Animacion y Movimiento

- Usar animaciones suaves y discretas.
- Duracion sugerida: `800ms - 1000ms`
- Curva sugerida: `cubic-bezier(0.16, 1, 0.3, 1)`
- Tipos recomendados:
  - fade-in-up
  - reveal-left
  - reveal-right
- Evitar animaciones agresivas o demasiado frecuentes.

Ejemplo:

```css
.reveal {
  opacity: 0;
  transition: all 1000ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-left {
  transform: translateX(-40px);
}

.reveal-right {
  transform: translateX(40px);
}

.reveal.active {
  opacity: 1;
  transform: translateX(0);
}
```

## 10. Implementacion en Otro Proyecto Existente

### 10.1 Estrategia recomendada

No copiar clases de forma literal si el otro proyecto ya tiene sistema propio. Lo correcto es mapear esta guia a:

- variables CSS existentes
- tokens del design system actual
- utilidades de Tailwind si ya estan definidas
- componentes base ya creados

### 10.2 Orden de implementacion

1. Crear o mapear tokens globales de color, tipografia y espaciado.
2. Definir contenedor principal y breakpoints.
3. Crear estilos base para `h1`, `h2`, `h3`, texto y botones.
4. Construir layouts de seccion reutilizables.
5. Aplicar reglas responsive.
6. Agregar animaciones suaves solo al final.

### 10.3 Recomendaciones para integracion

- Si el otro proyecto ya usa otra fuente, mantener la estructura y solo reemplazar las familias tipograficas.
- Si ya existe una paleta de marca, conservar la jerarquia visual aunque cambien los colores.
- Si el proyecto tiene un grid propio, respetarlo y adaptar esta guia a sus anchos y gutters.
- Si existe un sistema de componentes, esta guia debe funcionar como especificacion visual, no como duplicado tecnico.

## 11. CSS Base de Referencia

```css
:root {
  --container-max: 1280px;
  --space-section: 96px;
  --space-container-x-mobile: 24px;
  --space-container-x-desktop: 48px;
  --radius-card: 32px;
  --radius-pill: 999px;
}

.section-ui {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}

.container-ui {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: var(--space-container-x-mobile);
  padding-right: var(--space-container-x-mobile);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.title-hero {
  font-family: var(--font-heading);
  font-size: 48px;
  line-height: 0.95;
  font-weight: 900;
}

.title-section {
  font-family: var(--font-heading);
  font-size: 36px;
  line-height: 1.15;
  font-weight: 700;
}

.text-lead {
  font-size: 20px;
  line-height: 1.7;
}

.text-body {
  font-size: 18px;
  line-height: 1.7;
}

@media (min-width: 768px) {
  .container-ui {
    padding-left: var(--space-container-x-desktop);
    padding-right: var(--space-container-x-desktop);
  }

  .title-hero {
    font-size: 72px;
  }

  .title-section {
    font-size: 48px;
  }
}
```

## 12. Checklist de Validacion

- Los titulos respetan la jerarquia definida.
- El contenedor mantiene ancho maximo y paddings consistentes.
- Las secciones usan `96px` de aire vertical.
- Mobile se lee bien sin depender del desktop.
- Los grids colapsan correctamente en una columna.
- Los botones mantienen tamano tactil comodo.
- Las cards conservan padding, radio y sombra uniforme.
- Las animaciones no afectan la legibilidad ni el rendimiento.

## 13. Resultado Esperado

Aplicando esta guia, otro proyecto deberia poder replicar la misma estructura visual con una base clara de:

- tipografia
- espaciado
- layout
- responsive
- componentes reutilizables
- consistencia visual entre secciones

