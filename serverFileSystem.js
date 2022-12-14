const express = require("express")
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//imports dao FileSystem
const ProductController = require('./src/controller/productControllerFileSystem');
const CartController = require('./src/controller/cartControllerFileSystem');
//routers de FileSystem
const productFileSystem = new ProductController()
const cartFileSystem = new CartController()

app.use('/api/productos', productFileSystem.getRouter());
app.use('/api/carrito', cartFileSystem.getRouter());

app.listen(PORT, ()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})
app.on("error",(error)=>{
    console.log(`Error en servidor ${error}`)
})