import { generateToken } from "../utils/token-generator.js";

const default_user={
    id:1,
    email:"user@email.com",
    password:"strongPass123"
}

export async function login(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Cuerpo de la solicitud faltante" });
    }

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });
    }

    const user = { id: 1, email };
    if (email === default_user.email && password === default_user.password) {
      const token = generateToken(user);
      res.json({ token });
    } else {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
}