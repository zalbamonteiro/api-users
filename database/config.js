const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:admin@cluster0.uqk6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "api-users";

const getAll = async (collection) => {
  try {
    await client.connect();
    return await client.db(dbName).collection(collection).find({}).toArray();
  }
  catch(erro){
    console.log('====> ', erro)
  } 
  finally {
    await client.close();
    console.log("Conexão com banco fechada!")
  }
}

const getBy = async (collection, selectObject) => {
  try {
    await client.connect();
    return await client.db(dbName).collection(collection).findOne(selectObject);
  }
  catch(erro){
    console.log('====> ', erro)
  } 
  finally {
    await client.close();
    console.log("Conexão com banco fechada!")
  }
}

const insert = async (collection ,newObject) => {
  try {
    await client.connect();
    return await client.db(dbName).collection(collection).insertOne(newObject);
  }
  catch(erro){
    console.log('====> ', erro)
  } 
  finally {
    await client.close();
    console.log("Conexão com banco fechada!")
  }
}

const update = async (collection, selectObject ,newObject) => {
  try {
    await client.connect();
    return await client.db(dbName).collection(collection).updateOne(selectObject, {$set: newObject});
  }
  catch(erro){
    console.log('====> ', erro)
  } 
  finally {
    await client.close();
    console.log("Conexão com banco fechada!")
  }
}

const remove = async (collection, selectObject) => {
  try {
    await client.connect();
    return await client.db(dbName).collection(collection).deleteOne(selectObject);
  }
  catch(erro){
    console.log('====> ', erro)
  } 
  finally {
    await client.close();
    console.log("Conexão com banco fechada!")
  }
}

module.exports = {getAll, getBy, insert , update, remove};