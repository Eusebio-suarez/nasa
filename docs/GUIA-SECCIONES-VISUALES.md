# Guia de Secciones y Estructura Visual

## 1. Objetivo

Esta guia define que debe llevar cada seccion del sitio, como debe organizarse visualmente y, sobre todo, que elementos le pertenecen de forma exclusiva.

Su objetivo es servir como especificacion para refactorizar o adaptar un proyecto existente sin mezclar esta estructura con otros recursos graficos ya presentes en ese proyecto.

No busca imponer todos los recursos visuales del proyecto actual. Busca definir la composicion minima, los limites y la jerarquia de cada seccion.

## 2. Como usar esta guia en un proyecto existente

Esta guia debe aplicarse con estas reglas:

- Copiar la estructura visual de cada seccion, no todos los adornos del proyecto original.
- Respetar la biblioteca grafica existente del proyecto destino si ya tiene ilustraciones, patrones, iconografia o texturas propias.
- No duplicar funciones visuales entre secciones.
- Si un elemento ya tiene un lugar natural en otra seccion, no repetirlo aqui.

Traduccion practica:

- Si el proyecto destino ya usa ilustraciones editoriales en otras paginas, esta guia no obliga a repetirlas aqui.
- Si el proyecto destino ya tiene un sistema de iconos propio, usar ese sistema, pero manteniendo la misma cantidad y jerarquia definidas aqui.
- Si ya existe una marca visual fuerte, conservarla, siempre que no rompa la composicion de la seccion.

## 3. Orden Visual Recomendado

La pagina debe seguir este orden:

1. Navbar
2. Hero
3. Nosotros
4. Servicios
5. Servicio destacado o servicio a domicilio
6. Contacto
7. Footer
8. CTA flotante de WhatsApp

Regla:

- No alterar este orden salvo que exista una razon de negocio fuerte.
- La narrativa visual debe ir de presentacion a confianza, luego oferta, luego conversion.
- Si el proyecto existente tiene mas bloques, deben mapearse a estas funciones, no competir con ellas.

## 4. Reglas Visuales Compartidas

Todas las secciones deben respetar esta base:

- Contenedor maximo: `1280px`
- Padding horizontal mobile: `24px`
- Padding horizontal desktop: `48px`
- Padding vertical estandar por seccion: `96px`
- Titulos con `Outfit`
- Texto base con `Inter`
- Alternancia suave de fondos claros
- Bordes, sombras y radios amplios
- Animaciones discretas de entrada

Patron visual base para secciones de contenido:

1. Eyebrow o etiqueta
2. Titulo principal de seccion
3. Texto de apoyo
4. Contenido principal de la seccion

## 5. Regla de Unicidad Visual

Cada seccion debe tener:

- 1 funcion principal
- 1 protagonista visual
- 0 o 1 recurso secundario de apoyo

Cada seccion no debe tener:

- 2 protagonistas compitiendo
- 2 CTAs principales
- mezcla de patrones de otras secciones
- recursos decorativos agregados "por si acaso"

Definicion de protagonista visual:

- el elemento que mas peso compositivo tiene dentro de la seccion
- puede ser una imagen, un bloque de cards, una tarjeta premium, un mapa o un banner destacado

Definicion de recurso secundario:

- un apoyo visual discreto que acompana al protagonista sin competir con el
- por ejemplo: un fondo suave, una tarjeta flotante pequena o una linea de acento

## 6. Reparto Global de Elementos Exclusivos

Para evitar choques con otros elementos graficos del proyecto existente, usar este reparto:

- Logo protagonista: solo Navbar, Contacto y Footer
- Imagen protagonista grande: Hero, Nosotros y Servicio destacado
- Grid o carrusel de cards: solo Servicios
- Tarjeta premium principal: solo Contacto
- Tarjeta flotante pequena: solo Servicio destacado
- Mapa: solo Contacto
- Redes sociales: solo Footer
- CTA flotante: solo boton flotante
- Badge o eyebrow: Hero, Nosotros, Servicios, Servicio destacado y Contacto

No repetir:

- iconos sociales en Hero, Nosotros o Contacto
- mapa en Footer
- logo grande dentro de Servicios
- mini cards flotantes en varias secciones
- varias secciones con fotos grandes y beneficios al mismo tiempo

## 7. Navbar

### 7.1 Funcion de la seccion

Dar contexto de marca y acceso inmediato a navegacion y conversion.

### 7.2 Elementos obligatorios

Debe llevar exactamente estos grupos:

- Logo
- Nombre de la marca
- Subtitulo corto o descriptor
- Navegacion principal
- 1 CTA principal de conversion

### 7.3 Elemento visual exclusivo de esta seccion

El unico recurso visual distintivo del Navbar debe ser:

- una barra sticky con fondo translucido o blur suave

Este es su protagonista visual. No necesita mas.

### 7.4 Limites exactos

- 1 logo
- 1 bloque de marca
- 1 grupo de navegacion
- 1 CTA
- 0 badges
- 0 iconos sociales
- 0 imagenes decorativas

### 7.5 Organizacion visual

- Altura fija aproximada: `80px`
- Posicion: sticky en la parte superior
- Fondo: blanco con transparencia ligera
- Borde inferior suave
- Layout horizontal
- Logo a la izquierda
- Navegacion al centro o zona media
- CTA a la derecha

### 7.6 Que no debe absorber

No incluir dentro del Navbar:

- mensajes promocionales largos
- contador, rating o testimonios
- redes sociales
- dos CTAs primarios
- badges o chips decorativos

### 7.7 Responsive y refactor

- En desktop se muestra menu + CTA
- En mobile al menos debe mantenerse marca y una accion visible
- Si el proyecto existente tiene menu hamburguesa, se puede conservar
- La marca debe seguir siendo el primer elemento visible

## 8. Hero

### 8.1 Funcion de la seccion

Presentar la marca, explicar la propuesta de valor y abrir el camino a la conversion.

### 8.2 Elementos obligatorios

Debe llevar:

- 1 badge o etiqueta superior
- 1 `H1` principal
- 1 subtitulo destacado o segunda linea de mensaje
- 1 parrafo de valor
- 1 CTA principal
- 0 o 1 CTA secundaria
- 1 imagen principal

### 8.3 Elemento visual exclusivo de esta seccion

El protagonista visual del Hero debe ser:

- la combinacion de 1 bloque tipografico fuerte + 1 imagen principal

Como apoyo visual se permite:

- hasta 2 decoraciones de fondo suaves

### 8.4 Limites exactos

- 1 badge
- 1 mensaje principal
- maximo 2 CTAs
- 1 imagen protagonista
- maximo 2 decoraciones abstractas
- 0 cards internas
- 0 sliders
- 0 testimonios

### 8.5 Organizacion visual

- Seccion a pantalla alta
- Layout de 2 columnas en desktop
- Columna izquierda: contenido textual
- Columna derecha: imagen protagonista
- Decoraciones abstractas solo para profundidad, no como contenido

### 8.6 Jerarquia interna

- Badge pequeno y muy visible
- `H1` dominante
- Subtitulo o segunda linea con contraste tipografico o cromatico
- Texto lead debajo del titulo
- Botones al final del bloque

### 8.7 Que no debe absorber

No incluir dentro del Hero:

- logos de clientes
- bloques de servicios
- galeria de imagenes
- formulario de contacto
- redes sociales
- contadores, stats o multiples mensajes paralelos

### 8.8 Responsive y refactor

- Mobile: contenido primero, imagen despues
- Desktop: texto e imagen en paralelo
- CTAs apiladas si no hay espacio horizontal suficiente
- Si el proyecto actual tiene sliders o demasiados elementos en el Hero, simplificar
- Debe quedar una sola idea principal

## 9. Seccion Nosotros

### 9.1 Funcion de la seccion

Construir confianza institucional y presentar el tono humano y profesional de la marca.

### 9.2 Elementos obligatorios

Debe llevar:

- 1 eyebrow
- 1 `H2`
- 1 parrafo descriptivo principal
- 1 imagen editorial o institucional
- 2 o 3 bloques de confianza

### 9.3 Elemento visual exclusivo de esta seccion

El protagonista visual de Nosotros debe ser:

- la imagen editorial institucional

El recurso secundario permitido es:

- un bloque de highlights con iconos pequenos

### 9.4 Limites exactos

- 1 imagen grande
- 2 o 3 highlights
- 1 icono por highlight
- 0 CTA principal
- 0 carrusel
- 0 segunda imagen grande

### 9.5 Organizacion visual

- Fondo claro secundario
- Layout en 2 columnas
- Columna izquierda: imagen
- Columna derecha: contenido
- Debajo del texto principal: highlights o bloques de apoyo

### 9.6 Estructura de highlights

Cada highlight debe llevar:

- 1 icono
- 1 titulo
- 1 texto corto

### 9.7 Que no debe absorber

No incluir en Nosotros:

- grillas de servicios
- testimonios tipo carrusel
- tarjetas comerciales
- multiples imagenes
- CTA agresivo de venta
- redes o links secundarios

### 9.8 Responsive y refactor

- Mobile: imagen arriba, contenido abajo
- Los highlights pasan a una sola columna si el ancho es reducido
- Si el proyecto existente tiene mucho texto institucional, resumirlo
- Priorizar credibilidad y lectura rapida

## 10. Seccion Servicios

### 10.1 Funcion de la seccion

Mostrar la oferta principal de forma clara, atractiva y facil de recorrer.

### 10.2 Elementos obligatorios

Debe llevar:

- 1 eyebrow
- 1 `H2`
- 1 parrafo introductorio
- 1 bloque visual de exploracion de servicios

Si el bloque es carrusel, debe llevar:

- navegacion con flechas o puntos

Si el bloque es grid, no necesita controles extra.

### 10.3 Elemento visual exclusivo de esta seccion

El protagonista visual de Servicios debe ser:

- el conjunto de cards

No debe competir con una imagen editorial grande ni con un banner promocional dentro de la misma seccion.

### 10.4 Limites exactos

- 1 bloque de encabezado
- 1 grid o 1 carrusel
- cards homogeneas
- 1 CTA por card
- 0 logo grande dentro de la seccion
- 0 beneficios largos fuera de las cards

### 10.5 Estructura obligatoria de cada card

Cada card debe llevar:

- 1 imagen
- 1 titulo del servicio
- 1 descripcion breve
- 1 CTA puntual

### 10.6 Estilo visual de cards

- Fondo blanco
- Radio amplio
- Sombra media
- Imagen superior fija
- Hover con elevacion ligera
- CTA pequena al pie

### 10.7 Que no debe absorber

No incluir dentro de Servicios:

- precios comparativos
- listas largas de beneficios
- testimonios
- informacion institucional
- formularios
- una segunda promocion destacada

### 10.8 Responsive y refactor

- Mobile: 1 card visible por fila
- Tablet: 2 cards por fila
- Desktop: 3 cards por fila o carrusel de 3 visibles
- Si el proyecto actual usa bloques de texto largos, reducirlos
- Si ya existe grid en vez de carrusel, se puede conservar

## 11. Seccion Servicio Destacado o Servicio a Domicilio

### 11.1 Funcion de la seccion

Destacar un servicio diferencial o premium dentro de un bloque de alto impacto.

### 11.2 Elementos obligatorios

Debe llevar:

- 1 badge de la seccion
- 1 titulo fuerte
- 1 descripcion corta
- 1 lista de beneficios
- 1 CTA principal
- 1 imagen lateral
- 1 mini bloque de refuerzo visual

### 11.3 Elemento visual exclusivo de esta seccion

El protagonista visual debe ser:

- 1 banner o tarjeta destacada de gran formato

Como apoyo visual se permite:

- 1 franja de acento
- 1 tarjeta flotante pequena de confianza

### 11.4 Limites exactos

- 1 badge
- 1 titulo
- 1 CTA
- 1 imagen
- 3 beneficios como base ideal
- maximo 1 tarjeta flotante pequena
- 0 segundo CTA principal
- 0 slider

### 11.5 Organizacion visual

- Fondo general claro
- Gran tarjeta o banner destacado
- Franja de acento superior
- Layout de 2 columnas
- Columna izquierda: contenido y beneficios
- Columna derecha: imagen protagonista

### 11.6 Estructura de beneficios

Cada beneficio debe llevar:

- 1 icono pequeno
- 1 titulo corto
- 1 descripcion corta

### 11.7 Que no debe absorber

No incluir aqui:

- grillas adicionales
- multiples promociones
- tabla de precios
- informacion institucional larga
- mapa
- redes sociales

### 11.8 Responsive y refactor

- Mobile: contenido arriba, imagen abajo
- La tarjeta flotante debe reubicarse sin tapar informacion clave
- Esta seccion debe sentirse mas especial que el resto
- Si el proyecto existente no tiene servicio a domicilio, usar este patron para cualquier servicio destacado, promocion o diferenciador

## 12. Seccion Contacto

### 12.1 Funcion de la seccion

Cerrar la pagina con una conversion clara y toda la informacion de contacto en un formato confiable.

### 12.2 Elementos obligatorios

Debe llevar:

- 1 eyebrow
- 1 titulo de seccion
- 1 tarjeta de contacto
- 1 logo o marca dentro de la tarjeta
- 1 texto breve de invitacion
- telefonos o WhatsApp
- correo
- direccion
- mapa

### 12.3 Elemento visual exclusivo de esta seccion

El protagonista visual de Contacto debe ser:

- la tarjeta premium de contacto

El mapa cumple rol secundario. No debe competir con la tarjeta.

### 12.4 Limites exactos

- 1 encabezado de seccion
- 1 tarjeta principal
- 1 mapa
- 1 bloque de marca dentro de la tarjeta
- maximo 3 tipos de canal de contacto
- 0 redes sociales dentro de la tarjeta
- 0 formularios pesados por defecto

### 12.5 Organizacion visual

- Encabezado arriba
- Grid de 2 columnas debajo
- Columna izquierda: tarjeta de contacto
- Columna derecha: mapa

### 12.6 Estructura interna obligatoria de la tarjeta

La tarjeta debe incluir:

1. Logo
2. Nombre de marca
3. Subtitulo
4. Separador visual
5. Texto breve de confianza
6. Lista de canales de contacto

### 12.7 Jerarquia de informacion

- Primero WhatsApp o telefono
- Luego correo
- Luego direccion fisica

### 12.8 Que no debe absorber

No incluir en Contacto:

- iconos sociales principales
- testimonios
- galeria
- carrusel
- seccion de servicios
- formulario largo salvo necesidad de negocio clara

### 12.9 Responsive y refactor

- Mobile: tarjeta arriba y mapa abajo
- El mapa nunca debe quedar demasiado pequeno
- Mantener una altura minima visible
- Si el proyecto actual tiene formulario y mapa juntos, evaluar si el formulario realmente aporta
- Para este patron visual, la prioridad es contacto directo y rapido

## 13. Footer

### 13.1 Funcion de la seccion

Cerrar con una base institucional fuerte y accesos secundarios utiles.

### 13.2 Elementos obligatorios

Debe llevar:

- Marca
- Texto corto institucional
- Navegacion
- Contacto
- Redes sociales

### 13.3 Elemento visual exclusivo de esta seccion

El protagonista visual del Footer debe ser:

- el bloque oscuro de cierre con contraste alto

Como apoyo visual se permite:

- brillos o gradientes muy sutiles de fondo

### 13.4 Limites exactos

- hasta 4 columnas en desktop
- 1 bloque de marca
- 1 bloque de navegacion
- 1 bloque de contacto
- 1 bloque de redes
- 0 mapa
- 0 formulario
- 0 CTA heroico

### 13.5 Organizacion visual

- Fondo oscuro
- Alto contraste con el resto del sitio
- Grid de 4 columnas en desktop
- Gradientes o brillos suaves de fondo

### 13.6 Distribucion recomendada

- Columna 1: marca + descripcion
- Columna 2: navegacion
- Columna 3: contacto
- Columna 4: redes

### 13.7 Que no debe absorber

No incluir en el Footer:

- sitemap completo
- segunda tarjeta de contacto premium
- mapa
- formulario largo
- banner promocional
- botones grandes de conversion

### 13.8 Responsive y refactor

- Mobile: columnas apiladas
- Mantener espaciado amplio entre bloques
- No sobrecargar el Footer con demasiados links
- Debe funcionar como cierre limpio, no como sitemap completo

## 14. CTA Flotante

### 14.1 Funcion de la seccion

Mantener una accion directa siempre visible sin interrumpir la experiencia.

### 14.2 Elementos obligatorios

Debe llevar:

- 1 icono reconocible
- 1 link directo al canal principal de contacto
- 1 etiqueta accesible

### 14.3 Elemento visual exclusivo de esta seccion

El protagonista visual debe ser:

- un boton circular fijo

No necesita texto persistente, tarjeta ni globo adicional.

### 14.4 Limites exactos

- 1 solo boton flotante
- 1 solo canal principal
- 0 texto visible permanente
- 0 botones flotantes secundarios

### 14.5 Organizacion visual

- Posicion fija abajo a la derecha
- Forma circular
- Alto contraste
- Sombra visible

### 14.6 Que no debe absorber

No convertir el CTA flotante en:

- menu flotante
- grupo de redes
- chip promocional
- burbuja con varios botones

### 14.7 Responsive y refactor

- Debe ser util, no invasivo
- No competir visualmente con los CTAs del Hero
- En mobile debe respetar margenes seguros

## 15. Patron de Fondo por Seccion

Para conservar la misma estructura visual, usar este ritmo:

- Navbar: blanco translucido
- Hero: fondo claro con decoraciones suaves
- Nosotros: `slate-50`
- Servicios: blanco
- Servicio destacado: `slate-50`
- Contacto: tono crema muy claro
- Footer: oscuro

Regla:

- La pagina debe alternar fondos claros para separar bloques sin usar divisores pesados.
- El fondo nunca debe convertirse en el protagonista principal de la seccion.

## 16. Patron de Densidad de Contenido

Cada seccion debe evitar saturacion.

Limites recomendados:

- 1 idea principal por seccion
- 1 titulo fuerte
- 1 texto de apoyo
- 1 bloque principal de contenido
- 1 CTA dominante cuando aplique

Evitar:

- multiples mensajes compitiendo
- exceso de iconos
- parrafos muy largos
- cards con demasiado texto
- decoraciones repetidas en todas las secciones

## 17. Checklist de Validacion por Seccion

Antes de dar una seccion por terminada, validar:

- Tiene un objetivo claro
- Tiene un solo protagonista visual
- No repite recursos que ya pertenecen a otra seccion
- Respeta el orden visual general
- Usa el mismo patron de espaciado
- Mantiene la jerarquia titulo -> texto -> contenido
- Tiene una sola accion principal
- La estructura funciona en mobile y desktop
- El fondo ayuda a separar la seccion de la anterior
- Los radios, sombras y espaciados son consistentes

## 18. Mapeo para un Proyecto Existente

Si el proyecto actual ya tiene otras secciones, adaptar asi:

- banner principal -> Hero
- bloque institucional -> Nosotros
- catalogo o grid de servicios -> Servicios
- promocion destacada -> Servicio destacado
- bloque de contacto o formulario -> Contacto
- cierre institucional -> Footer

Reglas de implementacion:

- No duplicar secciones con funciones parecidas
- Fusionar bloques redundantes hasta llegar a esta estructura
- Si un recurso grafico ya existe en otra parte del proyecto, no repetirlo aqui salvo que esta guia lo defina como obligatorio

## 19. Resumen Rapido de Exclusividades

Usar esta lectura rapida antes de implementar:

- Navbar: solo marca, navegacion y 1 CTA
- Hero: solo mensaje principal, imagen y hasta 2 CTAs
- Nosotros: solo imagen institucional y 2 o 3 highlights
- Servicios: solo encabezado y cards de servicios
- Servicio destacado: solo banner premium, beneficios, 1 CTA y 1 mini tarjeta de confianza
- Contacto: solo tarjeta premium + mapa
- Footer: solo cierre institucional + navegacion + contacto + redes
- CTA flotante: solo 1 boton fijo

## 20. Resultado Esperado

Aplicando esta guia en un refactor, el proyecto debe terminar con:

- una narrativa visual clara
- secciones con funciones bien definidas
- mejor ritmo entre contenido y conversion
- menos mezcla entre recursos graficos
- jerarquia visual consistente
- estructura reusable en otros proyectos similares
