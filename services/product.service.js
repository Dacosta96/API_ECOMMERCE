
const {faker} = require('@faker-js/faker')

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
      });
    }
  }

create (){


}

find (){

  return this.products;

}

findOne (id){
  return this.products.find(item=>item.id===id);


}
}

module.exports = ProductsServices;
