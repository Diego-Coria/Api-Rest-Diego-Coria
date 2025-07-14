import {router} from "express";

const router=router();

import { getAllProducts,
         searchProducts,
         getProductById,
         getProducts } from "../controllers/products.controller.js";





//obtener listado de productos
router.get("/products",getProducts);

//Buscar por ID
router.get("/products/:id",getProductById);

//Buscar por genero
router.get("/products",getAllProducts);

//buscar por nombre
router.get("/products/search",searchProducts);



export default router;


