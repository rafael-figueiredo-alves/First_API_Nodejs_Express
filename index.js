const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;

const url = `mongodb+srv://${db_user}:${db_pass}@${db_host}`;

async function main() {
  
  const Client = await MongoClient.connect(url);
  
  const db = Client.db(db_name);

  const Collection = db.collection("Alunos");

  //Aplicação Express  
  const app = express();

  //função para usar JSON no Express
  app.use(express.json());

  //Endpoint principal - exibe página de boas vindas a API
  app.get("/", function (req, res) {
    res.send(
      "<html><body><h1>Olá mundo!</h1><p>Esta é a minha primeira API usando NodeJS e ExpressJS!</p></body></html>"
    );
  });

  //dois testes de Array e Objeto JSON
  const teste = ["Rafaela", "Davi", "Jailza"];
  const alunos = [
    {
      nome: "Rafael Alves",
      turma: "English 5.1",
    },
    {
      nome: "Rafaela Alves",
      turma: "English 10.1",
    },
    {
      nome: "Davi Alves",
      turma: "Kids 8.3",
    },
    {
      nome: "Jailza Alves",
      turma: "English 11.2",
    },
  ];

  //Endpoint /teste - exibe o array
  app.get("/teste", function (req, res) {
    res.send(teste);
  });

  //endpoint /aluno para mostrar objeto JSON pré-criado
  app.get("/aluno", (req, res) => res.send(alunos));

  app.get("/alunos", async function (req, res){
      const documentos = await Collection.find().toArray();

      res.statusCode = 200;
      res.send(documentos);
      
  });

  app.get("/alunos/:id", async function (req, res){
      const id = req.params.id;

      const item = await Collection.findOne({ _id: new ObjectId(id)});

      if (item != null) {
          res.status(200).send(item);
      } else {
          res.statusCode = 204;
      }
      

  });

  app.post("/alunos", async function (req, res) {
      const item = req.body;

      await Collection.insertOne(item);

      res.status(200).send(item);
  });

  app.put("/alunos", function (req, res) {
    res.send("Entrada PUT da entidade alunos");
  });

  app.patch("/alunos", function (req, res) {
    res.send("Entrada Patch da entidade alunos");
  });

  app.delete("/alunos", function (req, res) {
    res.send("Entrada Delete da entidade alunos");
  });

  app.options("/alunos", function (req, res) {
    res.send("Entrada Options da entidade Alunos");
  });

  app.head("/alunos", function (req, res) {
    res.send("Entrada Head da Entidade Alunos");
  });

  app.listen(process.env.PORT || 3000);
}

main();
