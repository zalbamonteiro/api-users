const mongodb = require("mongodb");
const { insert, getAll, remove, getBy } = require("../database/config");

async function getOrders() {
  return await getAll("pedidos");
}

const isertOrder = async (user) => {
  return await insert("pedidos", user);
};



const getOrdersById = async (orderId) => {
  const objectId = mongodb.ObjectId(orderId);
  return await getBy("pedidos", { _id: objectId })
};

const removeOrder = async (orderId) => {
  const objectId = mongodb.ObjectId(orderId);
  return await remove("pedidos", { _id: objectId });
};

module.exports = {
  getOrders,
  getOrdersById,
  isertOrder,
  removeOrder,
};
