require('dotenv').config()
const express = require('express')
const getSingleProduct = require('./controllers/productControllers')
const app = express()
const createVendor = require('./controllers/vendorControllers')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api', (req, res) => {
 res.status(200).json({message: 'Hello, from server home route!'})
})

app.post('/api/create-vendor', createVendor)

app.get('/api/products', (req, res) => {
 res.status(200).json({message: 'Hello, from products page'})
})

app.get('/api/products/:id', getSingleProduct)

app.listen(3300, () => {
    console.log('Server listening on port 3300...')
})