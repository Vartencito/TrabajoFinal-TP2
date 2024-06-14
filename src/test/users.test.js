import Generator from "./generator.js";
import { expect } from "chai";
import supertest from "supertest";

const path = supertest("http://127.0.0.1:8080");

describe("TEST TP FINAL TP2", () => {
  describe("TESTEANDO RUTAS", () => {
    // it("Probando GET", async () => {
    //     const response = await path.get("/users");
    //   for (let i = 0; i < 10; i++) {
    //     const data = new Generator().createUser();
    //     expect(data);
    //   }
    // });
    it("Probando GET", async () => {
        const response = await path.get("/users");
        expect(response.status).to.eq(200);
      
    });
    it("Probando POST", async () => {
        const data = new Generator().createUser();
        const response = await path.post("/users").send(data);
        console.log(response);
        expect(response.status).to.eq(201);
      
    });
    it("Probando DELETE", async () => {
        const randomId = new Generator().generateRandomID();
        const response = await path.delete(`/users/:${randomId}`);
        expect(response.status).to.eq(200);
    });
  });
});
