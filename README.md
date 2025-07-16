# Api Rest en Node.js

## Autor
Diego Coria  
LinkedIn: https://www.linkedin.com/in/diego-coria-dev

## Descripción

API REST para gestión de productos y autenticación de usuarios desarrollada con Node.js, Express y Firestore.

## Instalación

1. Clonar el repositorio  
https://github.com/Diego-Coria/Api-Rest-Diego-Coria.git

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno, incluyendo las credenciales de Firebase (`FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, etc.) y el puerto (`PORT`). (ver archivo .env-example)

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/api/products`  
- **Descripción:** Devuelve la lista de todos los productos, con opción de filtrar por categoría usando el parámetro `category`.  
- **Parámetros:**
  - `category` (query, opcional): Filtra productos por categoría.
- **Ejemplo de uso:** `/api/products?category=aventura`  
- **Respuesta ejemplo:**

```json
[
  {
    "id": "sample-product",
    "name": "Sample Product",
    "consola": "Nintendo Switch",
    "category": "aventura",
    "año_de_lanzamiento": 2023
  }
]
```

### Buscar productos por nombre o categoría

- **GET** `/api/products/search`  
- **Descripción:** Devuelve los productos que coincidan con el nombre o categoría indicados, con búsqueda insensible a mayúsculas.  
- **Parámetros:**
  - `name` (query, opcional): Texto a buscar en el nombre del producto.
  - `category` (query, opcional): Texto a buscar en la categoría del producto.
- **Ejemplo de uso:** `/api/products/search?name=halo&category=accion`  
- **Respuesta ejemplo:**

```json
[
  {
    "id": "halo-game",
    "name": "Halo Infinite",
    "category": "accion",
    "consola": "Xbox Series X",
    "año_de_lanzamiento": 2021
  }
]
```

### Obtener producto por ID

- **GET** `/api/products/:id`  
- **Descripción:** Devuelve un producto específico por su ID.  
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/api/products/sample-product`  
- **Respuesta ejemplo:**

```json
{
  "id": "sample-product",
  "name": "Sample Product",
  "consola": "Nintendo Switch",
  "category": "aventura",
  "año_de_lanzamiento": 2023
}
```

### Iniciar sesión

- **POST** `/api/auth/login`  
- **Descripción:** Autentica a un usuario y devuelve un token JWT.  
- **Body (JSON):**

```json
{
  "email": "user@email.com",
  "password": "strongPass123"
}
```

- **Respuesta ejemplo:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Crear un producto

- **POST** `/api/products`  
- **Descripción:** Crea un nuevo producto (requiere autenticación con token JWT).  
- **Body (JSON):**

```json
{
  "name": "Nuevo Producto",
  "consola": "PlayStation 5",
  "category": "deportes",
  "año_de_lanzamiento": 2022
}
```

- **Respuesta ejemplo:**

```json
{
  "id": "new-product-id",
  "name": "Nuevo Producto",
  "consola": "PlayStation 5",
  "category": "deportes",
  "año_de_lanzamiento": 2022
}
```

### Actualizar un producto

- **PUT** `/api/products/:id`  
- **Descripción:** Actualiza un producto existente por su ID (requiere autenticación con token JWT).  
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
{
  "name": "Producto Actualizado",
  "consola": "PlayStation 5",
  "category": "deportes",
  "año_de_lanzamiento": 2023
}
```

- **Respuesta ejemplo:**

```json
{
  "id": "new-product-id",
  "name": "Producto Actualizado",
  "consola": "PlayStation 5",
  "category": "deportes",
  "año_de_lanzamiento": 2023
}
```

### Eliminar un producto

- **DELETE** `/api/products/:id`  
- **Descripción:** Elimina un producto por su ID (requiere autenticación con token JWT).  
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

### Ruta de bienvenida

- **GET** `/`  
- **Descripción:** Devuelve un mensaje de bienvenida a la API.  
- **Respuesta ejemplo:**

```json
{
  "message": "Bienvenido a mi Api Rest!"
}
```


## Pruebas

1. Usa Postman con la URL base: `http://api-rest-diego-coria.onrender.com`
2. Obtén un token con **POST** `/api/auth/login`:
   - Body:
     ```json
     {
       "email": "user@email.com",
       "password": "strongPass123"
     }
     ```
   - Respuesta:
     ```json
     {
       "token": "..."
     }
     ```
3. Usa el token en el header de autorización:
   ```
   Authorization: Bearer <token>
   ```

4. Rutas disponibles:
   - **GET** `/api/products`: Lista todos los productos.
   - **GET** `/api/products/:id`: Obtiene un producto por ID (ej. `/api/products/o8IEv2MgCf4xcIXnXEm2`).
   - **GET** `/api/products/search?name=valor&category=valor`: Busca por nombre o categoría (ej. `name=halo`, `category=accion`).
   - **POST** `/api/products`: Crea un producto (requiere token).
     - Body:
       ```json
       {
         "name": "Producto 1",
         "consola": "Nintendo Switch",
         "category": "aventura",
         "año_de_lanzamiento": 2023
       }
       ```
   - **PUT** `/api/products/:id`: Actualiza un producto (requiere token).
   - **DELETE** `/api/products/:id`: Elimina un producto (requiere token).
   - **GET** `/ruta_inexistente`: Devuelve 404.

## Manejo de errores

La API maneja los siguientes códigos de error:

- **400 Bad Request**: Datos malformados o incompletos.
- **401 Unauthorized**: Token no provisto o inválido.
- **403 Forbidden**: Token provisto pero sin permisos adecuados.
- **404 Not Found**: Ruta no definida o recurso inexistente.
- **500 Internal Server Error**: Error inesperado en el servidor o conexión con Firestore.
