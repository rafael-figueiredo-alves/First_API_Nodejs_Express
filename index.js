const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function(req, res){
    res.send('Olá mundo!');
});

const teste = ['Rafaela', 'Davi', 'Jailza']

app.get('/teste', function(req, res){
    res.send(teste);
});

app.post('/alunos', function(req, res){
    res.send(req.body);
});

app.put('/alunos', function(req, res){
    res.send('Entrada PUT da entidade alunos');
});

app.patch('/alunos', function(req, res){
    res.send('Entrada Patch da entidade alunos');
});

app.delete('/alunos', function(req, res){
    res.send('Entrada Delete da entidade alunos');
});

app.options('/alunos', function(req, res){
    res.send('Entrada Options da entidade Alunos');
});

app.head('/alunos', function(req, res){
    res.send('Entrada Head da Entidade Alunos');
});

app.listen(3000);