const products=[
  {
    "name": "The Legend of Zelda: Breath of the Wild",
    "consola": "Nintendo Switch",
    "genero": "Aventura / Mundo abierto",
    "año de lanzamiento": 2017
  },
  {
    "name": "God of War",
    "consola": "PlayStation 4",
    "genero": "Acción / Aventura",
    "año de lanzamiento": 2018
  },
  {
    "name": "Halo: Combat Evolved",
    "consola": "Xbox",
    "genero": "Shooter en primera persona",
    "año de lanzamiento": 2001
  },
  {
    "name": "Minecraft",
    "consola": "Multiplataforma",
    "genero": "Sandbox / Supervivencia",
    "año de lanzamiento": 2011
  }
]
import {db} from "./firebase.js";

import { collection,getDoc, getDocs,doc } from "firebase/firestore";

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

