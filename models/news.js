const mongodb = require("mongodb");
const { getAll, getBy } = require("../database/config");

async function getNews() {
  return await getAll("news");
}

async function getNewById(newsId) {
  const objectId = mongodb.ObjectId(newsId);
  return await getBy("news", { _id: objectId });
}


module.exports = {
  getNews,
  getNewById,
};
