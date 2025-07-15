// Importa el módulo express para crear rutas
import express from "express";
// Importa el controlador de login desde auth.controller.js
import {login} from "../controllers/auth.controller.js";

// Crea una instancia del enrutador de Express
const router = express.Router();

// Define la ruta POST /login para autenticar usuarios
router.post("/login",login);

// Exporta el enrutador para su uso en la aplicación principal
export default router;

