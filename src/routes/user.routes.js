import express from "express";
import UserControllers from "../controllers/user.controllers.js";

export default class UserRouter {
  #router;
  #controllers;

  constructor() {
    this.#router = express.Router();
    this.#controllers = new UserControllers();
  }

  start() {
    this.#router.get("/users", this.#controllers.getUsers);
    this.#router.delete("/users/:id", this.#controllers.removeUser);

    return this.#router;
  }
}
