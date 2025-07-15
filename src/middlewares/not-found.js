// Middleware para manejar solicitudes a rutas no definidas en la API
export default (req,res,next)=>{
    res.status(404).json({error:"Not found"});
};