const express = require('express');
const ProductsServices = require('./../services/product.service')

const router = express.Router();
const service = new ProductsServices();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
console.log(id)
});

router.post('/', (req,res)=>{
  const body = req.body;
  res.json({
    message:'creado',
    data:body
  })
})

module.exports = router;
