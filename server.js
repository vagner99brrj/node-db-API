
import express from 'express';

//iniciando o express
const app = express();

app.use(express.json());

const users = []

//rota de criação de usuário
app.post('/usuarios', (req, res) => {

    users.push(req.body);

    res.status(201).json({ message: 'Usuário criado com sucesso!' });

});

//rota de listagem de usuários
app.get('/usuarios', (req, res) => {

  res.status(200).json(users);

});


app.listen(9000);


//