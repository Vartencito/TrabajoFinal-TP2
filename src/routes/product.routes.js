import express from "express";
import ProductControllers from "../controllers/product.controllers.js";

export default class ProductRouter {
  #router;
  #controllers;

  constructor() {
    this.#router = express.Router();
    this.#controllers = new ProductControllers();
  }

  start() {
    this.#router.get("/products", this.#controllers.getProducts);
    this.#router.get("/products/:id", this.#controllers.getProductByID);
    this.#router.post("/products", this.#controllers.createProduct);
    this.#router.put("/products/:id", this.#controllers.updateProduct);
    this.#router.delete("/products/:id", this.#controllers.removeProduct);

    return this.#router;
  }
}
