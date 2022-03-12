// Importamos libreria faker
const faker = require('faker');
// Importamos libreria boom
const boom = require('@hapi/boom'); // Control de error

// Definimos Interacciones transaccionales de productos...
class ProductsService {
  // Inicializamos constructor
  constructor() {
    this.products = [];
    this.generate();
  }

  // función
  async generate() {
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
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  // función para crear
  async create(data) {
    // Creamos constante para nuevo producto
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }

    // Insertamos el nuevo producto al array de productos
    this.products.push(newProduct);

    // retornamos datos del nuevo producto
    return newProduct;
  }

  // función para retornar todos los productos
  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  // función para buscar un producto
  async findOne(id) {
    // Retornamos datos asociados al id
    const product = this.products.find(item => item.id === id);

    // Verificamos si existe el producto
    if(!product) {
      throw boom.notFound('Product not found');
    }

    // Verificamos si el producto es bloqueado
    if(product.isBlock) {
      throw boom.conflict('Product is block');
    }
    return product;
  }

  // función para actualizar producto
  async update(id, changes) {
    // Buscamos el INDEX donde se encuentra almacenado el ID del producto
    const index = this.products.findIndex(item => item.id === id);

    // Validamos que exista el registro, en caso que no... retornar mensaje de producto no encontrado
    if(index === -1) {
      // throw new Error('Product not found');
      throw boom.notFound('Product not found');
    }

    // Variable que captura el index del producto
    const product = this.products[index];

    // Actualizamos producto en posición index
    this.products[index] = {
        ...product,
        ...changes
    };

    // Retornamos datos del producto
    return this.products[index];
  }

  // función para eliminar un producto
  async delete(id) {
    // Buscamos el INDEX donde se encuentra almacenado el ID del producto
    const index = this.products.findIndex(item => item.id === id);

    // Validamos que exista el registro, en caso que no... retornar mensaje de producto no encontrado
    if(index === -1) {
      // throw new Error('Product not found');
      throw boom.notFound('Product not found');
    }

    // eliminamos el mensaje
    this.products.splice(index, 1);

    // Retornamos id de producto eliminado
    return { id };
  }
}

// Exportamos modulo ProductsService
module.exports = ProductsService;
