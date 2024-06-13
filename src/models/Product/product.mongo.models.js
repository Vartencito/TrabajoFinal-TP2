import ProductServices from "../../services/product.services.js";
import MongoConnection from "../MongoDB_Connetion.js";
import { ObjectId } from "mongodb";

export default class ProductMongoModels {
  getProducts = async () => {
    const products = await MongoConnection.db
      .collection("products")
      .find({})
      .toArray();
    return products;
  };

  getProductByID = async (id) => {
    const product = await MongoConnection.db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
      console.log(product);
    return product;
  };

  createProduct = async (productToAdd) => {
    const response = await MongoConnection.db
      .collection("products")
      .insertOne(productToAdd);
    return response;
  };

  updateProduct = async (productToUpdate, id) => {
    const response = await MongoConnection.db
      .collection("products")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { name: productToUpdate.name, price: productToUpdate.price } }
      );
    return response;
    //db.products.updateOne({_id:ObjectId(id)}, {descripcion:""})
  };

  removeProduct = async (id) => {
    const response = await MongoConnection.db
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
    return response;
    //db.products.deleteOne({_id: ObjectId(id)})
  };
}
