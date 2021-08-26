const {
  getProducts,
  getProductsById
} = require("../models/products");

module.exports = (app) => {
  app.get("/produtos", async (request, response) => {
    let result = await getProducts();
    response.json(result);
  });

  app.get("/produtos/:id", async (request, response) => {
    let result = await getProductsById(request.params.id);
    response.json(result);
  });

};