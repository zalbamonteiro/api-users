const mongodb = require("mongodb");
const { getAll, getBy } = require("../database/config");

async function getClients() {
  return await getAll("clientes");
}

async function getClientById(clientId) {
  const objectId = mongodb.ObjectId(clientId);
  return await getBy("clientes", { _id: objectId });
}

async function getClientByCPF(clientCPF) {
  return await getBy("clientes", { CPF: clientCPF });
}

module.exports = {
  getClients,
  getClientById,
  getClientByCPF
};
