# TechNova Solutions

Sitio web corporativo para TechNova Solutions, desarrollado con React y diseñado para mostrar los servicios tecnológicos de la empresa.

## Descripción del Proyecto

Este proyecto implementa un sitio web de una página (SPA) con navegación dinámica entre secciones. La aplicación está construida con React 18 y utiliza CSS puro para el diseño, sin dependencias adicionales de UI.

### Funcionalidades Implementadas

- **Navegación dinámica**: Sistema de routing interno para cambiar entre páginas sin recarga
- **Scroll suave**: Navegación fluida entre secciones de la página principal
- **Formulario de contacto**: Implementación funcional con validación básica
- **Diseño responsive**: Adaptación automática para dispositivos móviles, tablets y desktop
- **Background personalizado**: Imagen de fondo optimizada para la sección hero

## Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: React 18.2.0
- **Build Tool**: Create React App
- **Styling**: CSS3 puro con Flexbox y Grid
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages

### Estructura de Componentes

```
src/
├── components/
│   ├── Header.js/css          # Navegación principal con estado activo
│   ├── Hero.js/css            # Sección principal con background personalizado
│   ├── Services.js/css        # Grid de servicios con 6 tarjetas
│   ├── CallToAction.js/css    # Sección CTA con gradientes
│   ├── Contact.js/css         # Página de contacto con formulario
│   ├── About.js/css           # Página sobre nosotros con equipo
│   └── Footer.js/css          # Footer con navegación y redes sociales
├── App.js                     # Router principal y estado de navegación
└── assets/images/             # Recursos estáticos
```

### Gestión de Estado

El proyecto utiliza React hooks para manejar:
- **Estado de navegación**: `useState` para controlar la página activa
- **Formulario de contacto**: Estado local para campos del formulario
- **Navegación por scroll**: `document.getElementById` para scroll programático

## Instalación y Desarrollo

### Requisitos del Sistema
- Node.js >= 14.0.0
- npm >= 6.0.0

### Configuración Local

```bash
# Clonar el repositorio
git clone https://github.com/santiagosalazar/technova-solutions.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La aplicación se ejecutará en `http://localhost:3000`

### Build de Producción

```bash
# Generar build optimizado
npm run build

# Desplegar a GitHub Pages
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
- **CSS**: Estilos modulares por componente
- **Images**: Optimización automática con Create React App
- **Bundle**: Code splitting nativo de React
- **Performance**: Lazy loading implícito con React 18

## Configuración de Despliegue

### GitHub Pages
El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

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

1. **Desarrollo de Software y Apps** - Soluciones de software personalizado
2. **Consultoría en Transformación Digital** - Asesoría estratégica
3. **Ciberseguridad en la Nube** - Protección de datos y sistemas
4. **Implementación de IA** - Soluciones de inteligencia artificial
5. **Soporte Técnico y Outsourcing IT** - Servicios de soporte especializado

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
- Sistema de navegación dinámico
- Página de contacto con formulario funcional
- Página "Sobre Nosotros" con información corporativa
- Diseño responsive completo
- Optimización para producción

### Próximas Iteraciones 🔄
- Casos de éxito con portfolio de proyectos
- Blog/Noticias con CMS básico
- Integración con backend para formularios
- Analytics y métricas de rendimiento
