import ModelFactory from "../models/DAO/AbstractFactory.js";
import config from "../../config.js";

export default class ProductServices {
  #models;
  constructor() {
    this.#models = ModelFactory.get(config.PERSISTENCE_TYPE);
  }

  getProducts = async () => {
    const products = await this.#models.getProducts();
    return products;
  };

  getProductByID = async (id) => {
    const product = await this.#models.getProductByID(id);
    const {instance} = product;

    return instance;
  };

  createProduct = async (productToAdd) => {
    const result = await this.#models.createProduct(productToAdd);
    return result;
  };

  updateProduct = async (productToUpdate, id) => {
    const result = await this.#models.updateProduct(productToUpdate, id);
    return result;
  };

  removeProduct = async (id) => {
    const result = await this.#models.removeProduct(id);
    return result;
  };
}
