
const {faker} = require('@faker-js/faker')
const boom = require('@hapi/boom')

class ProductsServices {

  constructor(){  // guardar datos en memoria local
    this.products =[];
    this.generate();
  }

  generate (){
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id:faker.commerce.productName(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

 async create (data){
 const newProduct = {
  id:faker.commerce.productName(),
  ...data
 }
 this.products.push(newProduct);
 return newProduct;

}

find (){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(this.products)
    }, 5000)
  })


}

async findOne (id){
  const product = this.products.find(item=>item.id===id);
  if(!product){
    throw boom.notFound('product not found');
  }
  if(product.isBlock){
    throw boom.conflict('product is block');
  }
  return  product;
}



async update(id,changes){
  const index=this.products.findIndex(item=>item.id===id);
  if(index===-1){
    throw boom.notFound('product not found');
  }
const product=this.products[index];
this.products[index]={
  ...product,
  ...changes
};
return this.products[index];
}




async delete (id, changes){
  const index = this.products.findIndex(item=>item.id===id);
  if(index === -1){
    throw boom.notFound('product not found');
  }
  this.products.splice(index,1);
  return(id)
}
}

module.exports = ProductsServices;
