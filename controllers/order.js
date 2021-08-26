const {
  getOrders,
  getOrdersById,
  isertOrder, 
  removeOrder,
} = require("../models/orders");

module.exports = (app) => {
  app.get("/pedidos", async (request, response) => {
    let result = await getOrders();
    response.json(result);
  });

  app.get("/pedidos/:id", async (request, response) => {
    let result = await getOrdersById(request.params.id);
    response.json(result);
  });

  app.post("/pedidos", async (request, response) => {
    let result = await isertOrder(request.body);
    response.json(result);
  });

  app.delete("/pedidos/:id", async (request, response) => {
    let result = await removeOrder(request.params.id);
    response.json(result);
  });
};