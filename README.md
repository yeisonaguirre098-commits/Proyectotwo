# Proyecto Two - React + Vite

Aplicación React con Vite, React Router y ESLint.

## Instalación Local

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Build para Producción

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

## Despliegue en Render

Este proyecto está configurado para desplegar fácilmente en [Render](https://render.com).

### Pasos para desplegar:

1. Ve a [Render.com](https://render.com) y crea una cuenta
2. Conecta tu repositorio de GitHub
3. Crea un nuevo servicio web:
   - **URL del repositorio**: `https://github.com/yeisonaguirre098-commits/Proyectotwo.git`
   - **Branch**: `master`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Runtime**: Node

La configuración ya está en `render.yaml`, así que Render detectará automáticamente la configuración.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint sobre el código
- `npm run preview` - Previsualiza la versión compilada

## Estructura del Proyecto

```
src/
  ├── components/      # Componentes reutilizables
  │   ├── Encabezado.jsx
  │   ├── Navbar.jsx
  │   └── Pie.jsx
  ├── pages/          # Páginas de la aplicación
  │   ├── Inicio.jsx
  │   ├── Historia.jsx
  │   └── Caracteristicas.jsx
  ├── layout/         # Layout principal
  │   └── Layout.jsx
  ├── App.jsx         # Componente principal
  └── main.jsx        # Punto de entrada
```

## Tecnologías

- React 19
- Vite
- React Router DOM
- ESLint

## Solución de Problemas

Si tienes problemas al desplegar en Render:

1. **Error de build**: Asegúrate de que `npm run build` funciona localmente
2. **Puerto**: Render asigna automáticamente el puerto, no necesita configuración
3. **Node version**: Render usa Node 18+ por defecto

Más información en [Render Docs](https://render.com/docs)

