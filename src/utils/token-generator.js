// Importa la librería jsonwebtoken para generar tokens JWT
import jwt from "jsonwebtoken";
// Importa las variables de entorno desde el archivo .env
import "dotenv/config";

// Obtiene la clave secreta para firmar tokens desde las variables de entorno
const secret_key = process.env.JWT_SECRET_KEY;

// funcion para generar un token JWT
export const generateToken = (userData)=>{

    const user = {id:userData.id, email:userData.email};
    const expiration = {expiresIn:"1h"};

    return jwt.sign(user,secret_key,expiration);
}