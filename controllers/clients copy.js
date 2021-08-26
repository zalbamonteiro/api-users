const {
  getClients,
  getClientById,
  getClientByCPF,
} = require("../models/clients");

module.exports = (app) => {
  app.get("/clientes", async (request, response) => {
    let result = await getClients();
    response.json(result);
  });

  app.get("/clientes/:id", async (request, response) => {
    let result = await getClientById(request.params.id);
    response.json(result);
  });

  app.get("/clientes/busca/:cpf", async (request, response) => {
    let result = await getClientByCPF(request.params.cpf);
    response.json(result);
  });
};