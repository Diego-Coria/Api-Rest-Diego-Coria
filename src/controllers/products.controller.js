export const getProducts=(req,res)=>{
    res.json(products);
}

export const getAllProducts=(req,res)=>{
    if(category){
        const productsFiltered=products.filter((item)=>
        item.category.includes(category));
        res.json(productsFiltered);
        return;
    }
    res.json(products);
};


export const searchProducts =(req,res)=>{
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
}

export const getProductById=(req,res)=>{
    const id=req.params.id;
    const product =product.find((item)=>item.id == id);
    if(!product){
        res.status(404).json({error:"No existe producto"});
    }
    res.json(product);
}