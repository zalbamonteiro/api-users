const express = require('express');
const cors = require('cors');
const consign = require('consign');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

consign()
  .include('controllers')
  .into(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})