
import express from 'express';

//iniciando o express
const app = express();

app.use(express.json());

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body);

    res.send('OK, funcionou!');

});

app.get('/usuarios', (req, res) => {

  res.json(users);

});


app.listen(9000);