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
})

app.listen(3000);