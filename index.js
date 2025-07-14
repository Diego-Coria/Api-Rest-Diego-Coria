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





app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));

