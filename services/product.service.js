// Importamos libreria faker
const faker = require('faker');

// Definimos Interacciones transaccionales de productos...
class ProductsService {
  // Inicializamos constructor
  constructor() {
    this.products = [];
    this.generate();
  }

  // función
  generate() {
    // Verifico "En caso que no llegue la variable size, lista 10 por defecto"
    const limit = 100;

    // Generamos ciclo for para generar registros falsos
    for(let index = 0 ; index < limit ; index++) {
      // Llenamos array products
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  // función para crear
  create() {

  }

  // función para retornar todos los productos
  find() {
    // Retornamos array de productos
    return this.products;
  }

  // función para buscar un producto
  findOne(id) {
    // Retornamos datos asociados al id
    return this.products.find(item => item.id === id);
  }

  // función para actualizar producto
  udpate() {

  }

  // función para eliminar un producto
  delete() {

  }
}

// Exportamos modulo ProductsService
module.exports = ProductsService;
