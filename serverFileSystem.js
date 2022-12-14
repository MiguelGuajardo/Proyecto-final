const express = require("express")
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//imports dao FileSystem
const ProductsDaoFiles = require('./src/daos/products/prodDaoFS');
const CartDaoFiles = require('./src/daos/cart/cartDaoFS');
//routers de FileSystem
const prodControllerFS = new ProductsDaoFiles()
const cartControllerFS = new CartDaoFiles()

app.use('/api/productos', prodControllerFS.getRouter());
app.use('/api/carrito', cartControllerFS.getRouter());

app.listen(PORT, ()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})
app.on("error",(error)=>{
    console.log(`Error en servidor ${error}`)
})