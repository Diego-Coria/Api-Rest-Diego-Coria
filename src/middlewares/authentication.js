import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY;

//middleware para verificar el token en JWT
export const authentication = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token de autorización faltante o inválido" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token no ingresado" });
    }

    jwt.verify(token, secret_key, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Token inválido o expirado" });
      }
      req.user = decoded; // Opcional: agrega el usuario decodificado al objeto req
      next();
    });
  } catch (error) {
    return res.status(500).json({ error: "Error en la autenticación" });
  }
};