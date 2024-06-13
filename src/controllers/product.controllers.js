import ProductServices from "../services/product.services.js";

export default class ProductControllers {
  #services;
  constructor() {
    this.#services = new ProductServices();
  }

  checkEmptyObject = (product) => Object.keys(product).length === 0;

  getProducts = async (req, res) => {
    try {
      const products = await this.#services.getProducts();
      res.status(200).send(products);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res.status(400).send("<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>Page Not Found</h1></body></html>");
    }
  };

  getProductByID = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await this.#services.getProductByID(id);

      if (this.checkEmptyObject(product)) {
        throw new Error("The specified product ID is incorrect, missing or has been deleted in the past");
      }

      res.status(200).send(product);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res.status(404).send("<!DOCTYPE html><html><title>404 Not Found</title><body><h1>Page Not Found</h1></body></html>");
    }
  };

  createProduct = async (req, res) => {
    try {
      const productToAdd = req.body;

      if (this.checkEmptyObject(productToAdd)) {
        throw new Error("An empty user object cannot be processed");
      }

      const createdProduct = await this.#services.createProduct(productToAdd);
      const RESULT_OUTPUT = "A new product has been created successfully in the database";
      console.log(RESULT_OUTPUT);

      res.status(201).send(createdProduct);
    } catch (error) {
      console.log("The creation of the new product could not be completed");
      console.log(`   ---> Server Error: [${error}]`);
      res.status(406).send("<!DOCTYPE html><html><title>406 Not Acceptable</title><body><h1>Page Not Found</h1></body></html>");
    }
  };

  updateProduct = async (req, res) => {
    try {
      const productToUpdate = req.body;
      const {id} = req.params;
      const result = await this.#services.updateProduct(productToUpdate, id);

      const RESULT_OUTPUT = "The product has been updated correctly upon the database";
      res.status(200).send({statusCode: 200, message: RESULT_OUTPUT, result: result});

    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res.status(409).send("<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>Page Not Found</h1></body></html>");
    }
  };

  removeProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const result = await this.#services.removeProduct(id);

      const RESULT_OUTPUT = "The product has been removed successfully from the database";
      res.status(200).send({statusCode: 200, message: RESULT_OUTPUT, result: result});

    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res.status(409).send("<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>Page Not Found</h1></body></html>");
    }
  };
}
