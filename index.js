import express from "express";
import notFound from "./src/middlewares/not-found.js";

const app = express()
app.use(notFound);



const PORT=3000

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

app.get("/",(req,res)=>{
    res.json({message:"Bienvenido a mi Api Rest!"});
});

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));

//obtener listado de productos
app.get("/products",(req,res)=>{
    res.json(products);
})

//Buscar por ID
app.get("/products/:id",(req,resp)=>{
    const id=req.params.id;
    const product =product.find((item)=>item.id == id);
    if(!product){
        res.status(404).json({error:"No existe producto"});
    }
    res.json(product);
});

//Buscar por genero
app.get("/products",(req,res)=>{
    const {genero}=req.query;
    if(genero){
        const productsFiltered= products.filter((item)=>
        item.categories.includes(genero)
    );
    return res.json(productsFiltered);

    }
    res.json(products);
});

//buscar por nombre
app.get("/products/search",(req,res)=>{
    const {name}=req.query;
    if(!name){
        return res.status(400).json({error:"Se requiere el nombre"});

    }
    const productsFiltered=products.filter((item)=>
    item.name.toLocaleUpperCase().includes(name.toLocaleUpperCase()));
    if(productsFiltered.length==0){
        return res.status(404).json({error:"no se encontraron productos"});
    }
    res.json(productsFiltered);
})
