export default class UserMemoryModel {
  constructor() {}

  getUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const result = await response.json();
    console.log(result);
    return result;
  };

  createUser = async (userToAdd) => {
    const user = userToAdd;
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(user),
    });
    // console.log(response);
    if (response.status !== 200) {
      throw new Error("The user could not be created on the third party API");
    }
    return user;
  };

  removeUser = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  };
}
