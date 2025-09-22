# TechNova Solutions - Página Web

Una página web moderna y responsive para TechNova Solutions, una empresa de servicios tecnológicos.

## Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Componentes React**: Arquitectura modular con componentes reutilizables
- **Diseño Moderno**: Interfaz oscura con gradientes y efectos visuales
- **Navegación Suave**: Enlaces de navegación con scroll suave
- **Animaciones**: Efectos hover y transiciones fluidas

## Servicios Incluidos

1. **Desarrollo de Software y Apps**
2. **Consultoría en Transformación Digital**
3. **Ciberseguridad en la Nube**
4. **Implementación de IA**
5. **Soporte Técnico y Outsourcing IT**

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

3. **Abrir en el navegador:**
   La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### Construir para producción

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.js          # Navegación principal
│   ├── Header.css
│   ├── Hero.js            # Sección principal
│   ├── Hero.css
│   ├── Services.js        # Sección de servicios
│   ├── Services.css
│   ├── CallToAction.js    # Sección de llamada a la acción
│   ├── CallToAction.css
│   ├── Footer.js          # Pie de página
│   └── Footer.css
├── App.js                 # Componente principal
├── App.css
├── index.js              # Punto de entrada
└── index.css             # Estilos globales
```

## Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para interfaces de usuario
- **CSS3**: Estilos personalizados con gradientes y animaciones
- **HTML5**: Estructura semántica
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## Características Responsive

- **Desktop**: 3 columnas para servicios, navegación completa
- **Tablet**: 2 columnas para servicios, navegación adaptada
- **Mobile**: 1 columna para servicios, navegación simplificada

## Personalización

Para personalizar colores, fuentes o contenido:

1. **Colores**: Modifica las variables CSS en `index.css`
2. **Contenido**: Edita los componentes en la carpeta `src/components/`
3. **Servicios**: Actualiza el array `services` en `Services.js`

## Navegación

- **Inicio**: Sección hero principal
- **Servicios**: Grid de servicios ofrecidos
- **Casos de Éxito**: (Pendiente de implementación)
- **Nosotros**: (Pendiente de implementación)
- **Contacto**: (Pendiente de implementación)

## 🚀 Despliegue en GitHub Pages

### Pasos para subir a GitHub:

1. **Crear repositorio en GitHub:**
   ```bash
   # Inicializar git
   git init
   
   # Agregar archivos
   git add .
   
   # Primer commit
   git commit -m "Initial commit: TechNova Solutions website"
   
   # Conectar con GitHub (reemplaza 'tu-usuario' con tu nombre de usuario)
   git remote add origin https://github.com/santiagosalazar/technova-solutions.git
   
   # Subir código
   git push -u origin main
   ```

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Source: "Deploy from a branch"
   - Branch: "main" / "master"
   - Folder: "/ (root)"

3. **Construir y desplegar:**
   ```bash
   # Instalar dependencias
   npm install
   
   # Construir para producción
   npm run build
   
   # Instalar gh-pages
   npm install --save-dev gh-pages
   
   # Agregar script de despliegue al package.json
   # "deploy": "gh-pages -d build"
   
   # Desplegar
   npm run deploy
   ```

### 🌐 URL de la página:
Una vez desplegada, tu página estará disponible en:
`https://santiagosalazar.github.io/technova-solutions`

## Próximos Pasos

Esta es la primera pantalla de 5 pantallas planificadas. Las siguientes pantallas incluirán:

1. ✅ **Pantalla Principal** (Completada)
2. ✅ **Página de Contacto** (Completada)
3. ✅ **Página Sobre Nosotros** (Completada)
4. 🔄 **Casos de Éxito** (Pendiente)
5. 🔄 **Blog/Noticias** (Pendiente)
