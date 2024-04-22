const express=require('express');
const cors = require('cors');
const routerApi=require('./Routes');
const {logErrors, errorHandler,boomErrorHandler} = require('./Middelware/error.handler')

const app=express();
const port=3000;

app.use(express.json());

// const whitelist = ['http://localhost:5500', 'https://myapp.co','http://127.0.0.7:5500/Frontend.html'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new error('no permitido'));
//     }
//   }
// }
// app.use(cors(options));
app.use(cors());

app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
  });

  app.get('/nueva-ruta',(req,res)=>{
    res.send('Hola, soy una nueva ruta');
  });


  routerApi(app);

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  app.listen(port,()=>{
    console.log('Mi port'+port);
  });
