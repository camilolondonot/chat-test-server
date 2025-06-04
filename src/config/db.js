import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const db = await mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const initDB = async () => {
    await db.query(`
        CREATE TABLE IF NOT EXISTS messages (
            id_message INT AUTO_INCREMENT PRIMARY KEY,
            content TEXT NOT NULL,
            sender ENUM('bot', 'user') NOT NULL,
            timestamps TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
};
