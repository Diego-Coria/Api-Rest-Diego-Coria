import {router} from "express";

const router=router();


//obtener listado de productos
router.get("/products",(req,res)=>{
    res.json(products);
})

//Buscar por ID
router.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    const product =product.find((item)=>item.id == id);
    if(!product){
        res.status(404).json({error:"No existe producto"});
    }
    res.json(product);
});

//Buscar por genero
router.get("/products",(req,res)=>{
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
router.get("/products/search",(req,res)=>{
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


export default router;


