export default class UsersModelsMemory {
  #products;
  #idCounter;
  constructor() {
    this.#idCounter = 0;
    this.#products = [
      {
        denominacion: "Leche Descremada",
        precio: 4.99,
        id: 1,
      },
      {
        denominacion: "Cubierta para camión IVECO",
        precio: 75.99,
        id: 2,
      },
      {
        denominacion: "Jabón Dove Original",
        precio: 2.45,
        id: 3,
      },
    ];
  }

  getProducts = async () => {
    return this.#products;
  };

  getProductByID = async (id) => {
    let instance;
    let position;

    this.#products.find((e, idx) => {
      if (e.id == id) {
        instance = e;
        position = idx;
        return true;
      }
    });

    return {instance, position};
  };

  createProduct = async (productToAdd) => {
    const product = productToAdd;

    product["id"] = ++this.#idCounter;
    this.#products.push(product);

    return JSON.stringify(product);
  };

  updateProduct = async (productToUpdate, id) => {
    const productFound = await this.getProductByID(id);
    /* console.log(productFound);
    console.log(productFound.instance);
    console.log(productFound.position);
    */
    this.#products[productFound.position] = productToUpdate;

    return true;
  };

  removeProduct = async (id) => {
    const product = await this.getProductByID(id);
    this.#products.splice(product.position, 1);

    return true;
  };
}
