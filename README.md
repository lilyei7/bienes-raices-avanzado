# Portafolio - Sitio de ejemplo (Bienes Raíces)

Este repositorio contiene un sitio estático de ejemplo para un portafolio de bienes raíces. Está pensado para desplegar en GitHub Pages desde la carpeta `site/`.

Contenido relevante:

- `site/` - archivos estáticos del sitio (index.html, styles.css, script.js).
- `.github/workflows/deploy-pages.yml` - workflow de GitHub Actions que publica `site/` en Pages cuando haces push a `main`.

Nuevas mejoras (sitio avanzado):

- Seed data con múltiples propiedades (casas y departamentos).
- Búsqueda por texto (barrio, ciudad, descripción).
- Filtros por tipo, precio máximo y número de habitaciones.
- Ordenamiento (destacados, precio asc/desc) y paginación.
- Vista detalle rápida (overlay/modal) al pulsar "Ver".

Prueba local rápida:

```bash
cd site
python3 -m http.server 8000
# Abrir http://localhost:8000
```

Haz cambios en `site/script.js` para ajustar las propiedades o `site/styles.css` para cambiar el diseño; cada push a `main` desencadenará el workflow y actualizará GitHub Pages.

Cómo usar localmente:

1. Abre `site/index.html` en tu navegador o usa un servidor estático (por ejemplo `live-server` o `python -m http.server`).

   Ejemplo con Python 3:

   ```bash
   cd site
   python3 -m http.server 8000
   # luego abre http://localhost:8000
   ```

Despliegue a GitHub Pages:

1. Crea un repo en GitHub y sube este proyecto (o usa `git remote add origin ...`).
2. Empuja la rama `main`.
3. GitHub Actions detectará el push, ejecutará el workflow y publicará la carpeta `site/` en GitHub Pages.

Notas:
- El formulario de contacto es un ejemplo; conecta un servicio (Formspree, Netlify forms, o tu backend) para recibir mensajes.
- Para usar un dominio personalizado agrega un archivo `CNAME` dentro de `site/` con tu dominio y configura DNS.
