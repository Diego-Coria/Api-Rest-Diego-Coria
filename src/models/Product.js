
// Importa la instancia de Firestore desde el archivo de configuración
import {db} from "./firebase.js";

// Importa las funciones necesarias de Firestore para interactuar con la base de datos
import { collection,getDoc, getDocs,doc,addDoc, updateDoc, deleteDoc} from "firebase/firestore";

// Define la referencia a la colección 'products' en Firestore
const productsCollection =collection(db,"products");

// Obtiene todos los productos de la colección 'products'
export const getAllProducts=async()=>{
    try{
      const snapshot =await getDocs(productsCollection);
      
      return snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
    }catch(error){
      console.error(error);
    }
};

// Obtiene un producto específico por su ID
export const getProductById = async (id)=>{
  try{
    const productRef= doc(productsCollection,id);
    const snapshot=await getDoc(productRef);
    return snapshot.exists() ?  {id:snapshot.id, ...snapshot.data()}:null;
  }catch (error){
    console.error(`Error al pedir el producto por ID ${id}:`,error);
    
  }
};

// Crea un nuevo producto en la colección 'products'
export const createProduct = async (productData) => {
  try {
    // Valida los datos del producto (puedes agregar más validaciones según sea necesario)
    if (!productData.name || !productData.category) {
      throw new Error("El nombre y la categoría son obligatorios");
    }
    const docRef = await addDoc(productsCollection, productData);
    return { id: docRef.id, ...productData };
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

// Actualiza un producto existente en la colección 'products'
export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    if (!snapshot.exists()) {
      return null;
    }
    await updateDoc(productRef, productData);
    return { id, ...productData };
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${id}:`, error);
    throw error;
  }
};

// Elimina un producto de la colección 'products'
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    if (!snapshot.exists()) {
      return false;
    }
    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${id}:`, error);
    throw error;
  }
};
