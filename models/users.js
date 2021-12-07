const mongodb = require("mongodb");
const { insert, getAll, getBy, update, remove } = require("../database/config");

async function getUsers() {
  return await getAll("users");
}

/* async function getUsersById(userId) {
  const objectId = mongodb.ObjectId(userId);
  return await getBy("users", { _id: objectId });
} */

const insetUser = async (user) => {
  return await insert("users", user);
};

const updateUser = async (user, query) => {
  return await update("users", query, user);
};

const deleteUser = async (query) => {
  return await remove("users", query);
};

module.exports = { getUsers, insetUser, updateUser, deleteUser };
