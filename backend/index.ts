import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const porta = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('API Funcionando');
})

app.listen(porta, () => console.log(`Servidor rodando: http://localhost:${porta}`));