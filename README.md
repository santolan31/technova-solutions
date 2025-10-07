# TechNova Solutions

Sitio web corporativo para TechNova Solutions, desarrollado con React y diseñado para mostrar los servicios tecnológicos de la empresa.

## Descripción del Proyecto

Este proyecto implementa un sitio web de una página (SPA) con navegación dinámica entre secciones. La aplicación está construida con React 18 y utiliza bootstrap, sin dependencias adicionales de UI.

### Funcionalidades Implementadas

- **Navegación dinámica**: Sistema de routing interno para cambiar entre páginas sin recarga
- **Scroll suave**: Navegación fluida entre secciones de la página principal
- **Formulario de contacto**: Implementación funcional con validación básica
- **Sistema de cotización**: Generador de cotizaciones con múltiples monedas y cálculos automáticos
- **Diseño responsive optimizado**: Adaptación completa para móviles, tablets y desktop con UX mejorada
- **Navegación móvil inteligente**: Menú desplegable optimizado con botones contextuales
- **Background personalizado**: Imagen de fondo optimizada para la sección hero

## Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: React 18.2.0
- **Build Tool**: Create React App
- **Styling**: Bootstrap 5 + CSS3 personalizado con Flexbox y Grid
- **Animations**: Framer Motion para transiciones suaves
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recomendado) + GitHub Pages


### Estructura de Componentes

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js           # Navegación principal responsive con menú móvil
│   │   ├── Hero.js             # Sección principal con background personalizado
│   │   ├── CallToAction.js     # Sección CTA con navegación inteligente
│   │   └── Footer.js           # Footer con navegación y redes sociales
│   ├── pages/
│   │   ├── Services.js         # Grid de servicios con 6 tarjetas
│   │   ├── Quote/              # Sistema de cotización con múltiples monedas
│   │   │   ├── Quote.js        # Componente principal de cotización
│   │   │   └── Quote.css       # Estilos personalizados
│   │   ├── Contact.js          # Página de contacto con formulario
│   │   └── About.js            # Página sobre nosotros con equipo
│   └── styles/
│       └── globals.css         # Estilos globales consolidados
├── App.js                      # Router principal y estado de navegación
└── assets/images/              # Recursos estáticos
```

### Gestión de Estado

El proyecto utiliza React hooks para manejar:
- **Estado de navegación**: `useState` para controlar la página activa
- **Formulario de contacto**: Estado local para campos del formulario
- **Sistema de cotización**: Estado para servicios seleccionados, monedas y formularios
- **Navegación por scroll**: `document.getElementById` para scroll programático

## Instalación y Desarrollo

### Requisitos del Sistema
- Node.js >= 14.0.0
- npm >= 6.0.0

### Configuración Local

```bash

git clone https://github.com/santiagosalazar/technova-solutions.git


npm install

npm start
```

La aplicación se ejecutará en `http://localhost:3000`

### Build de Producción

```bash

npm run build


npm run deploy
```

## Implementación de Características

### Sistema de Navegación
- **Header/Footer**: Botones con estado activo que cambian la página actual
- **Scroll suave**: Implementado con `scrollIntoView({ behavior: 'smooth' })`
- **Routing interno**: Switch statement en App.js para renderizar componentes

### Diseño Responsive
- **Breakpoints**: 1024px (tablet), 768px (mobile), 480px (small mobile)
- **Grid System**: CSS Grid para layouts complejos, Flexbox para alineación
- **Typography**: Escalas responsivas con clamp() para texto fluido

### Optimizaciones
- **CSS**: Estilos modulares por componente, consolidación en globals.css
- **Images**: Optimización automática con Create React App
- **Bundle**: Code splitting nativo de React
- **Performance**: Lazy loading implícito con React 18
- **Mobile UX**: Navegación optimizada con menús contextuales
- **Responsive Design**: Breakpoints optimizados para mejor experiencia móvil

## Configuración de Despliegue

### Vercel (Recomendado)
El proyecto está optimizado para despliegue en Vercel con configuración automática:

#### Configuración Automática
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar desde el directorio del proyecto
vercel

# Para producción
vercel --prod
```

#### Configuración Manual en Vercel Dashboard
1. Conectar repositorio de GitHub
2. Framework Preset: **Create React App**
3. Build Command: `npm run build`
4. Output Directory: `build`
5. Install Command: `npm install`

#### Ventajas de Vercel
- ✅ **Despliegue automático** desde GitHub
- ✅ **CDN global** para mejor rendimiento
- ✅ **HTTPS automático** con certificados SSL
- ✅ **Preview deployments** para cada PR
- ✅ **Analytics integrado** y métricas de rendimiento
- ✅ **Zero-config** para React apps

### GitHub Pages
El proyecto también está configurado para desplegarse automáticamente en GitHub Pages:

```json
{
  "homepage": "https://santiagosalazar.github.io/technova-solutions",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Variables de Entorno
- **NODE_ENV**: Configurado automáticamente por Create React App
- **PUBLIC_URL**: Configurado para GitHub Pages subdirectory

## Servicios Implementados

1. **Desarrollo de Software y Apps** - Soluciones de software personalizado ($1,500 - 4-6 semanas)
2. **Consultoría en Transformación Digital** - Asesoría estratégica ($2,000 - 2-3 semanas)
3. **Ciberseguridad en la Nube** - Protección de datos y sistemas ($2,500 - 3-4 semanas)
4. **Implementación de IA** - Soluciones de inteligencia artificial ($3,000 - 6-8 semanas)
5. **Soporte Técnico** - Servicios de soporte especializado ($1,200 - 1-2 semanas)
6. **Outsourcing IT** - Externalización de servicios IT ($1,800 - 2-4 semanas)

## Sistema de Cotización

### Características del Generador de Cotizaciones

- **Selección de Servicios**: Interfaz visual para seleccionar múltiples servicios
- **Múltiples Monedas**: Soporte para USD, EUR, COP, MXN, GBP con conversión automática
- **Cálculos Automáticos**: 
  - Subtotal por servicios seleccionados
  - Descuento del 5% por 3+ servicios
  - IVA del 19% aplicado al subtotal con descuento
  - Total final calculado automáticamente
- **Estimación de Tiempo**: Cálculo automático basado en el servicio con mayor duración
- **Formulario de Contacto**: Captura de datos del cliente para procesamiento
- **Acciones Disponibles**: 
  - Descarga de PDF (en desarrollo)
  - Envío por correo (en desarrollo)
  - Solicitud de cotización formal (en desarrollo)

### Monedas Soportadas

| Moneda | Símbolo | Tasa de Cambio (Aprox.) |
|--------|---------|-------------------------|
| USD    | $       | 1.00 (Base)            |
| EUR    | €       | 0.85                   |
| COP    | $       | 4,100                  |
| MXN    | $       | 17.5                   |
| GBP    | £       | 0.78                   |

## Despliegue y Configuración

### GitHub Pages Setup

El proyecto incluye configuración automática para GitHub Pages:

```bash
# Configuración inicial del repositorio
git init
git add .
git commit -m "Initial commit: TechNova Solutions website"

# Conectar con repositorio remoto
git remote add origin https://github.com/santiagosalazar/technova-solutions.git
git push -u origin main

# Desplegar automáticamente
npm run deploy
```

### Configuración de GitHub Pages
1. Repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "gh-pages"
4. Folder: "/ (root)"

**URL de producción**: `https://santiagosalazar.github.io/technova-solutions`

## Roadmap del Proyecto

### Implementado ✅
- Landing page con hero section personalizado
- Sistema de navegación dinámico y responsive
- Página de contacto con formulario funcional
- Página "Sobre Nosotros" con información corporativa
- **Sistema de cotización completo** con múltiples monedas y cálculos automáticos
- Diseño responsive optimizado con UX mejorada para móviles

- Estructura de componentes reorganizada y modular
- Optimización para producción con auto-deploy

### Próximas Iteraciones 🔄
- Implementación de descarga de PDF para cotizaciones
- Integración con servicio de correo para envío automático
- Casos de éxito con portfolio de proyectos
- Blog/Noticias con CMS básico
- Integración con backend para formularios y procesamiento de cotizaciones
- Analytics y métricas de rendimiento
