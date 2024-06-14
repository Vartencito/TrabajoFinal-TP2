export default class UserMemoryModel {
  constructor() {}

  getUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const result = await response.json();
    console.log(result);
    return result;
  };

  removeUser = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  };
}
