import express from 'express';
import { getMessages, postMessage, resetChat } from '../controllers/index.js';

const router = express.Router();
/**
 * @swagger
 * /messages:
 *   get:
 *     summary: Obtener todos los mensajes
 *     responses:
 *       200:
 *         description: Lista de mensajes
 */
router.get('/', getMessages);

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Crear un nuevo mensaje y obtener respuesta de la IA
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mensaje creado y respuesta del bot
 */
router.post('/', postMessage);

/**
 * @swagger
 * /messages/reset:
 *   delete:
 *     summary: Eliminar todos los mensajes
 *     responses:
 *       200:
 *         description: Chat reseteado
 */
router.delete('/reset', resetChat);

export default router;