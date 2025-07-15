// Importa todas las funciones del modelo Product.js
import * as Model from "../models/Product.js";

// Controlador para obtener productos
export const getProducts=(req,res)=>{
    res.json(products);
}

// Controlador para obtener todos los productos, con opción de filtrar por categoría
export const getAllProducts=async(req,res)=>{
    const {category}=req.query;

    const products = await Model.getAllProducts();

    if(category){
        const productsFiltered=products.filter((item)=>
        item.category.includes(category));
        res.json(productsFiltered);
        return;
    }
    res.json(products);
};


// Controlador para buscar productos por nombre y/o categoría
export const searchProducts = async (req, res) => {
  try {
    const { name, category } = req.query;
    if (!name && !category) {
      return res.status(400).json({ error: "Se requiere nombre o categoría" });
    }
    const products = await Model.getAllProducts();
    let productsFiltered = products;
    if (name) {
      productsFiltered = productsFiltered.filter((item) =>
        item.name && item.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (category) {
      productsFiltered = productsFiltered.filter((item) =>
        item.category && item.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    if (productsFiltered.length === 0) {
      return res.status(404).json({ error: "No se encontraron productos" });
    }
    res.json(productsFiltered);
  } catch (error) {
    console.error("Error en searchProducts:", error);
    res.status(500).json({ error: "Error al buscar productos" });
  }
};

// Controlador para obtener un producto por su ID
export const getProductById=async(req,res)=>{
    const id=req.params.id;
    const product =await Model.getProductById(id);
    if(!product){
        res.status(404).json({error:"No existe producto"});
    }
    res.json(product);
}

// Controlador para crear un nuevo producto
export const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await Model.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// Controlador para actualizar un producto existente
export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productData = req.body;
    const updatedProduct = await Model.updateProduct(id, productData);
    if (!updatedProduct) {
      return res.status(404).json({ error: "No existe el producto" });
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

// Controlador para eliminar un producto
export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await Model.deleteProduct(id);
    if (!deleted) {
      return res.status(404).json({ error: "No existe el producto" });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
