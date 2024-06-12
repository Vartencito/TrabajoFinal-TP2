import MongoConnection from "../MongoDB_Connetion.js";

export default class ProductMongoModels {
  getProducts = async () => {
    const products = await MongoConnection.db.collection("products");
    return products;
  };

  getProductByID = async (id) => {};

  createProduct = async (productToAdd) => {};

  updateProduct = async (productToUpdate, id) => {};

  removeProduct = async (id) => {};
}
