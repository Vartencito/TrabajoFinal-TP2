import ProductMemoryModels from "../Product/product.memory.models.js";
import ProductMongoModels from "../Product/product.mongo.models.js";

export default class ModelFactory {
  constructor() {}

  static get(type) {
    switch (type) {
      case "MEM":
        console.log("Persistiendo en la memoria del servidor!");
        return new ProductMemoryModels();
      /*  case "FS":
        console.log("Persistiendo sobre FileSystem (FS)");
        return new ProductFsModels(); */
      case "MONGO_DB":
        console.log("Persistiendo en la memoria de MongoDB!");
        return new ProductMongoModels();
      default:
        console.log("Persistiendo en la memoria default!");
        return new ProductMemoryModels();
    }
  }
}

