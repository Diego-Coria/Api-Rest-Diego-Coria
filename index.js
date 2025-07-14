import express from "express";
import notFound from "./src/middlewares/not-found.js";
import "dotenv/config";
import authRouter from "./src/routes/auth.routes.js";

app.use(bodyParser.json());

app.use(authentication);//se puede mejorar protegiendo cada ruta de forma individual

//routers
app.use("/auth",authRouter);


const app = express()
app.use(notFound);

app.get("/",(req,res)=>{
    res.json({message:"Bienvenido a mi Api Rest!"});
});

import productsRouter from "./src/routes/products.router.js";
import bodyParser from "body-parser";
import { authentication } from "./src/middlewares/authentication.js";
app.use(productsRouter);


const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));

