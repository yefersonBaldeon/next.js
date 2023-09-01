
const express = require('express');
const { faker } = require("@faker-js/faker")

const router = express.Router()

const ProductService = require("./../services/product.service")

const service = new ProductService()







router.get('/', (req, res) => {

    const products = service.find()

    res.json(products)
});




router.get('/:id', (req, res) => {

    const { id } = req.params
    const products = service.findOne(id)
    res.json(products)

});



router.post('/', (req, res) => {

    const body = req.body

    const newProducto=service.create(body)


    res.status(201).json(newProducto)
});



router.patch('/:id', (req, res) => {

    const { id } = req.params
    const body = req.body

    const changeProduct=service.update(id,body)
    res.json(changeProduct)
});



router.delete('/:id', (req, res) => {

    const { id } = req.params

    const one=service.delete(id)
    
    res.json(one)

});



module.exports = router;

