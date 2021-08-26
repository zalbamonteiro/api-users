const mongodb = require("mongodb");
const {getAll, getBy } = require("../database/config");

async function getProducts() {
  return await getAll("products");
}

async function getProductsById(productId) {
  const objectId = mongodb.ObjectId(productId);
  return await getBy("products", { _id: objectId });
}


module.exports = {
  getProducts,
  getProductsById,
};
