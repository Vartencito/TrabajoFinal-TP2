import UserMemoryModel from "../models/User/user.memory.models.js"

export default class UserServices {
  #models;
  constructor() {
    this.#models = new UserMemoryModel();
  }

  getUsers = async () => {
    const users = await this.#models.getUsers();
    return users;
  };

  createUser = async (userToAdd) => {
    const result = await this.#models.createUser(userToAdd);
    return result;
  };

  removeUser = async (id) => {
    const result = await this.#models.removeUser(id);
    return result;
  };
}
