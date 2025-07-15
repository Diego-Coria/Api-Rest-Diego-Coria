// Importa los módulos necesarios: express para la aplicación, cors para habilitar CORS,
// notFound para manejar rutas no encontradas, productsRouter y authRouter para las rutas,
// y dotenv/config para cargar variables de entorno
import express from "express";
import cors from "cors";
import notFound from "./src/middlewares/not-found.js";
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.routes.js";
import "dotenv/config";

const app = express();

// Middleware para parsear JSON (necesario para req.body)
app.use(express.json());
app.use(cors());

// Ruta raíz
app.get("/", (req, res) => {
  res.json({ message: "<h1>Bienvenido a mi Api Rest!<h1>" });
});

// Montar rutas
app.use("/api", authRouter); // Ruta de autenticación (sin middleware de autenticación)
app.use("/api", productsRouter); // Rutas de productos (algunas protegidas en products.router.js)

// Middleware para rutas no encontradas
app.use(notFound);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal en el servidor" });
});

// Define el puerto desde una variable de entorno o usa 3001 por defecto
const PORT = process.env.PORT || 3001;
// Inicia el servidor en el puerto especificado y muestra la URL en la consola
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));