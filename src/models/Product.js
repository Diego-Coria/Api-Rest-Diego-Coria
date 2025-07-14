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

export const getAllProducts=()=>{
    return products;
};

export const getProductById = (id)=>{
  return products.find( (item)=>item.id==id);
};

