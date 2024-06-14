import UserServices from "../services/user.services.js";

export default class UserControllers {
  #services;
  constructor() {
    this.#services = new UserServices();
  }

  checkEmptyObject = (user) => Object.keys(user).length === 0;

  getUsers = async (req, res) => {
    try {
      const users = await this.#services.getUsers();
      res.status(200).send(users);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(400)
        .send(
          "<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };

  createUser = async (req,res) => {
    try {
      const userToAdd = req.body;

      if (this.checkEmptyObject(userToAdd)) {
        throw new Error("An empty user object cannot be processed");
      }

      const createdUser = await this.#services.createUser(userToAdd);
      const RESULT_OUTPUT =
        "A new user has been created successfully in the database";
      console.log(RESULT_OUTPUT);

      res.status(201).send(createdUser);
    } catch (error) {
      console.log("The creation of the new user could not be completed");
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(406)
        .send(
          "<!DOCTYPE html><html><title>406 Not Acceptable</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };

  removeUser = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.#services.removeUser(id);

      const RESULT_OUTPUT =
        "The user has been removed successfully from the database";
      res
        .status(200)
        .send({ statusCode: 200, message: RESULT_OUTPUT, result: result });
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(409)
        .send(
          "<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };
}
