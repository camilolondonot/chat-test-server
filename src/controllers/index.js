import dotenv from 'dotenv';
import { db } from '../config/db.js';
import axios from 'axios';

dotenv.config();

export const getMessages = async (req, res) => {
	const [rows] = await db.query('SELECT * FROM messages ORDER BY timestamps ASC');
	res.json(rows);
};

export const postMessage = async (req, res) => {
	const { content } = req.body;
	if (!content) return res.status(400).json({ error: 'Mensaje vacío' });

	await db.query('INSERT INTO messages (content, sender) VALUES (?, ?)', [content, 'user']);

	const { data } = await axios.post(
		`${process.env.OPENAI_API_URL}`,
		{ input: content }
	);

	const botMessage = data.choices[0].message.content;

	await db.query('INSERT INTO messages (content, sender) VALUES (?, ?)', [botMessage, 'bot']);

	res.json({ user: content, bot: botMessage });
};

export const resetChat = async (req, res) => {
	await db.query('TRUNCATE TABLE messages');
	res.json({ message: 'Chat reseteado' });
};
