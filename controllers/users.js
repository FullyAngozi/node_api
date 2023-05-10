import { v4 as uuidv4 } from "uuid";

export const createUsers = (request, response) => {
  const user = request.body;

  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  response.send(`User with the name ${user.firstname} added to the database`);
};

export const getUsers = (request, response) => {
  response.send(users);
};

export const getUserById = (request, response) => {
  const { id } = request.params;

  const foundUser = users.find((user) => user.id === id);

  response.send(foundUser);
};

export const deleteUserById = (request, response) => {
  const { id } = request.params;

  users = users.filter((user) => user.id !== id);

  response.send(`User with the ${id} has been deleted from the database`);
};

export const updateUserInfo = (request, response) => {
  const { id } = request.params;
  const { firstname, lastName, age } = request.body;

  const user = users.find((user) => user.id === id);

  if (firstname) {
    user.firstname = firstname;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  response.send(`user with the ${id} has been updated`);
};
