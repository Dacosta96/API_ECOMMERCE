
const express = require('express');
const {faker} = require('@faker-js/faker')

const app = express();
const port = 3000;

app.get('/', (req,res)=>{
  res.send('hola servidor')
});
app.listen(port,()=>{
  console.log('estoy utilizando el puerto'+port);
})


app.get('/products', (req,res)=>{

  const products =[];
  const {size} = req.query;
  const limit = size || 20;

  for (index =0; index < limit ; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),

    })
  }

  res.json(products);

})
