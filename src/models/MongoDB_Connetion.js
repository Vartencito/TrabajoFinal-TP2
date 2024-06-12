import config from "../../config.js";
import {MongoClient} from "mongodb";

export default class MongoConnection {
  static client = null;
  static db = null;

  static connect = async () => {
    this.client = new MongoClient(config.CONNECTION_STRING, {
      // useNewUrlParser: true
    });

    await this.client.connect();
    console.log("Base de datos conectada! ");

    //FIX: indicar la base con la que vamos a trabajar
    this.db = this.client.db(config.DB_NAME);
  };
}
