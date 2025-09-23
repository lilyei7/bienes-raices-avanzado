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
