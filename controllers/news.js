const {
  getNews,
  getNewById,
} = require("../models/news");

module.exports = (app) => {
  app.get("/noticias", async (request, response) => {
    let result = await getNews();
    response.json(result);
  });

  app.get("/noticias/:id", async (request, response) => {
    let result = await getNewById(request.params.id);
    response.json(result);
  });
};