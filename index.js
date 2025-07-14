import express from "express";
import notFound from "./src/middlewares/not-found.js";


const app = express()
app.use(notFound);

app.get("/",(req,res)=>{
    res.json({message:"Bienvenido a mi Api Rest!"});
});

import productsRouter from "./src/routes/products.router.js";
app.use(productsRouter);




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



app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));

