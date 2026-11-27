import mysql from 'mysql2/promise';
import 'dotenv/config';

let connection: mysql.Connection;

try {
    connection = await mysql.createConnection({
        host: String(process.env.DB_HOST),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_NAME),
        port: Number(process.env.DB_PORT)
    });
    
    console.log('MySQL conectado');
} catch (err) {
    console.error('Erro ao conectar:', err);
    throw err;
}

export default connection;