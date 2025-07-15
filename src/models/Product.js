
import {db} from "./firebase.js";

import { collection,getDoc, getDocs,doc,addDoc, updateDoc, deleteDoc} from "firebase/firestore";

const productsCollection =collection(db,"products");


export const getAllProducts=async()=>{
    try{
      const snapshot =await getDocs(productsCollection);
      
      return snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
    }catch(error){
      console.error(error);
    }
};

export const getProductById = async (id)=>{
  try{
    const productRef= doc(productsCollection,id);
    const snapshot=await getDoc(productRef);
    return snapshot.exists() ?  {id:snapshot.id, ...snapshot.data()}:null;
  }catch (error){
    console.error(`Error al pedir el producto por ID ${id}:`,error);
    
  }
};

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
