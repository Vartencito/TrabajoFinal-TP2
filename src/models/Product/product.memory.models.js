export default class ProductMemoryModels {
  #products;
  #idCounter;
  constructor() {
    this.#idCounter = 0;
    this.#products = [];
  }

  getProducts = async () => {
    return this.#products;
  };

  getProductByID = async (id) => {
    // let instance;
    // let position;

    // this.#products.find((e, idx) => {
    //   if (e.id == id) {
    //     instance = e;
    //     position = idx;
    //     return true;
    //   }
    // });

    // return {instance, position};
    const found = this.#products.find((product) => product.id == id);
    let result = found;
    if (found === null || found === undefined) {
      result = "Objecto not found";
    }

    return result;
  };

  createProduct = async (productToAdd) => {
    const product = productToAdd;

    product["id"] = ++this.#idCounter;
    this.#products.push(product);

    return JSON.stringify(product);
  };

  updateProduct = async (productToUpdate, id) => {
    // const productFound = await this.getProductByID(id);
    // this.#products[productFound.position] = productToUpdate;

    // return true;
    const index = this.#products.findIndex((producto) => producto.id == id);
    if (index !== -1) {
      this.#products[index] = { ...productToUpdate, id: parseInt(id) };
    }
    return { indexObjectDeleted: index };
  };

  removeProduct = async (id) => {
    const index = this.#products.findIndex((producto) => producto.id == id);
    if (index !== -1) {
      this.#products.splice(index, 1);
    }
    return true;
  };
}
