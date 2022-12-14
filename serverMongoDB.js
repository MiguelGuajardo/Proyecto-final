const express = require('express');
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const ProductsDaoMongo = require('./src/daos/products/prodDaoMongoDB');
const CartDaoMongo = require('./src/daos/cart/cartDaoMongo');
const productMongo = new ProductsDaoMongo()
const cartMongo = new CartDaoMongo()

app.use('/api/productos', productMongo.getRouter());
app.use('/api/carrito', cartMongo.getRouter());


app.listen(PORT, ()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})
app.on("error",(error)=>{
    console.log(`Error en servidor ${error}`)
})