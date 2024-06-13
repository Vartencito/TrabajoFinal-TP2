import config from "../../config.js";
import { MongoClient } from "mongodb";

export default class MongoConnection {
  static client = null;
  static db = null;

  static connect = async () => {
    try {
      MongoConnection.client = new MongoClient(config.CONNECTION_STRING);
      await MongoConnection.client.connect();

      console.log("Base de datos conectada!");
      MongoConnection.db = MongoConnection.client.db(config.DB_NAME);
    } catch (e) {
      console.log("Error de conexión Mongo DB: ", e);
    }
  };

}
