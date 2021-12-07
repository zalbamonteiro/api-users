const mongodb = require("mongodb");
const {
  getUsers,
  getUsersById,
  insetUser,
  updateUser,
  deleteUser,
} = require("../models/users");

module.exports = (app) => {
  app.get("/", async (request, response) => {
    let result = await getUsers();
    response.json(result);
  });

 /*  app.get("/:id", async (request, response) => {
    let result = await getUsersById(request.params.id);
    response.json(result);
  }); */
  

  app.post("/", async (request, response) => {
    let result = await insetUser(request.body);
    response.json(result);
  });

  app.put("/:id", async (request, response) => {
    const objectId = mongodb.ObjectId(request.params.id);
    let result = await updateUser(request.body, { _id: objectId });
    response.json(result);
  });

  app.delete("/:id", async (request, response) => {
    const objectId = mongodb.ObjectId(request.params.id);
    let result = await deleteUser({ _id: objectId });
    response.json(result);
  });
};
