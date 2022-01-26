const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function(req, res){
    res.send('<html><body><h1>Olá mundo!<br>Esta é a minha primeira API usando NodeJS e ExpressJS!</h1></body></html>');
});

const teste = ['Rafaela', 'Davi', 'Jailza'];
const alunos = [
                {
                    "nome" : "Rafael Alves",
                    "turma" : "English 5.1"
                },
                {
                    "nome" : "Rafaela Alves",
                    "turma" : "English 10.1"
                },
                {
                    "nome" : "Davi Alves",
                    "turma" : "Kids 8.3"
                },
                {
                    "nome" : "Jailza Alves",
                    "turma" : "English 11.2"
                }
               ];

app.get('/teste', function(req, res){
    res.send(teste);
});

app.get('/alunos', (req, res) => res.send(alunos));

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

app.listen(process.env.PORT || 3000);