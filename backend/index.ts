import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/rotas';

const app = express();
const porta = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('API Funcionando');
}) 

app.use('/catalog', router);

app.listen(porta, () => console.log(`Servidor rodando: http://localhost:${porta}`));