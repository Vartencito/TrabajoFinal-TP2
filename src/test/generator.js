import { faker } from "@faker-js/faker";

export default class generateRandomUser {
  createUser() {
    const data = {
      address: {
        geolocation: {
          lat: faker.number.float({ min: 10, max: 240 }),
          long: faker.number.float({ min: 10, max: 240 }),
        },
        city: faker.location.city(),
        street: faker.location.street(),
        number: faker.string.alphanumeric(5),
        zipcode: faker.location.zipCode(),
      },
      id: faker.number.int({ min: 1, max: 10 }),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      name: {
        firstname: faker.person.fullName(),
        lastname: faker.person.lastName(),
      },
      phone: faker.phone.number(),
      __v: 0,
    };
    return data;
  }
  generateRandomID() {
    const ID = { id: faker.number.int({ min: 1, max: 10 }) };
    return ID;
  }
}
