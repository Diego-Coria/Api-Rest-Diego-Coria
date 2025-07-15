# API REST con Node.js y Firebase

## instalacion

```shell
npm install
```

## Pruebas
1. Usa Postman con la URL: https://node-api-rest-diego-coria.vercel.app
2. Obtén un token con `POST /api/login`:
   - Body: `{ "email": "user@email.com", "password": "strongPass123" }`
   - Respuesta: `{ "token": "..." }`
3. Usa el token en `Authorization: Bearer <token>` para rutas protegidas.
4. Rutas disponibles:
   - GET /api/products: Lista todos los productos.
   - GET /api/products/:id: Obtiene un producto por ID (ej. `o8IEv2MgCf4xcIXnXEm2`).
   - GET /api/products/search?name=valor&category=valor: Busca por nombre o categoría (ej. `name=halo`, `category=accion`).
   - POST /api/products: Crea un producto (requiere token).
     - Body: `{ "name": "Producto 1", "consola": "Nintendo Switch", "category": "aventura", "año de lanzamiento": 2023 }`
   - PUT /api/products/:id: Actualiza un producto (requiere token).
   - DELETE /api/products/:id: Elimina un producto (requiere token).
   - GET /ruta_inexistente: Devuelve 404.