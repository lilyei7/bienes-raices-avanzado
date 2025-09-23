Suplementos Store - Mini e-commerce

Cómo usar localmente:

1. Abre `index.html` en tu navegador (o sirve con un servidor estático):

   python3 -m http.server 8000

2. La tienda carga `products.json` embebido y permite:
   - Agregar al carrito (almacenado en localStorage)
   - Abrir carrito y modificar cantidades
   - Simulación de pago (alert)

Archivos:
- `index.html` - UI principal
- `styles.css` - estilos
- `app.js` - lógica del carrito y render
- `products.json` - catálogo de muestra

Notas:
- Este es un demo estático sin backend real. Para producción necesitarás integrar un pasarela de pagos y un backend para órdenes.

Despliegue en GitHub Pages:

1. El proyecto ya está en la rama `main`. Para servir la demo desde GitHub Pages en la ruta `/suplementos-store` basta con activar GitHub Pages en los ajustes del repo y elegir la rama `main` (o usar el workflow que ya tengas).

Características incluidas en esta demo:
- Catálogo con búsqueda, filtrado por categoría y ordenamiento
- Páginas de producto individuales (`product.html?id=...`)
- Modal de detalle en la página principal
- Carrito persistente en `localStorage` y checkout simulado que crea una orden y la guarda en `localStorage`
- Diseño responsive listo para Pages
