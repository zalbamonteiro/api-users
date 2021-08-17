const express = require('express');
var mongodb  = require('mongodb');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = 3000;

const {getUsers, insetUser, updateUser, deleteUser} = require('./users')

app.get('/', async (request, response) =>{
  let result = await getUsers();
  response.json(result)
});

app.post('/', async (request, response) =>{
  let result = await insetUser(request.body);
  response.json(result)
});

app.put('/:id', async (request, response) => {
  const objectId = mongodb.ObjectId(request.params.id);
  let result = await updateUser(request.body, {_id : objectId});
  response.json(result);
})

app.delete('/:id', async (request, response) => {
  const objectId = mongodb.ObjectId(request.params.id);
  let result = await deleteUser({_id : objectId});
  response.json(result);
})


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})