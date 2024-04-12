
const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req,res)=>{
  res.send('hola servidor')
});
app.listen(port,()=>{
  console.log('estoy utilizando el puerto'+port);
})

app.get('/products', (req,res)=>{
  res.json({
    name:'name',
    price: 2500
  })
});
