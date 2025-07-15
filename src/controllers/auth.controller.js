// Importa la función generateToken desde el módulo de utilidades para generar tokens JWT
import { generateToken } from "../utils/token-generator.js";


// Define un usuario predeterminado para pruebas (simula una base de datos de usuarios)
const default_user={
    id:1,
    email:"user@email.com",
    password:"strongPass123"
}

// Controlador para manejar la solicitud de login
export async function login(req, res) {
  try {
    // Valida que el cuerpo de la solicitud no esté vacío
    if (!req.body) {
      return res.status(400).json({ error: "falta cuerpo de la solicitud" });
    }
    // Extrae email y contraseña del cuerpo de la solicitud
    const { email, password } = req.body;
    // Verifica que ambos campos, email y contraseña, estén presentes
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });
    }
    
    // Crea un objeto de usuario con el ID y email proporcionados
    const user = { id: 1, email };
    // Compara las credenciales proporcionadas con el usuario predeterminado
    if (email === default_user.email && password === default_user.password) {
      // Genera un token JWT para el usuario autenticado
      const token = generateToken(user);
      res.json({ token });
    } else {
      // Devuelve error 401 si las credenciales no coinciden
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    // Registra el error en la consola
    console.error("Error en login:", error);
    // Devuelve error 500 si ocurre un problema inesperado
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
}