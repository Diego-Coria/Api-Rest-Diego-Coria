import {Router} from "express";
import { authentication } from "../middlewares/authentication.js";

const router=Router();

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


