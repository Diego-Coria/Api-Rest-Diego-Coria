// Importa el módulo Router de Express para definir rutas
import {Router} from "express";

// Importa el middleware de autenticación para proteger rutas
import { authentication } from "../middlewares/authentication.js";

// Crea una instancia del enrutador de Express
const router=Router();

// Importa los controladores para las operaciones de productos
import { getAllProducts,
         searchProducts,
         getProductById,
         createProduct,
         updateProduct,
         deleteProduct} from "../controllers/products.controller.js";

//Buscar por genero
router.get("/products",getAllProducts);

//buscar por nombre
router.get("/products/search",searchProducts);

//Buscar por ID
router.get("/products/:id",getProductById);

// Crear producto 
router.post("/products", authentication, createProduct);

// Actualizar producto 
router.put("/products/:id", authentication, updateProduct);

// Eliminar producto 
router.delete("/products/:id", authentication, deleteProduct);



export default router;


