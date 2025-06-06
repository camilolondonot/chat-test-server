import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import messagesRoutes from './routes/index.js';
import { swaggerDocs } from './swagger.js';
import { db, initDB } from './config/db.js';

dotenv.config();

const app = express();

app.set('trust proxy', 1); 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: '📛 Demasiadas peticiones, intentá más tarde.',
});
app.use(limiter);

app.use(cors({
  origin: ['https://test-chat-ia.netlify.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/messages', messagesRoutes);

swaggerDocs(app);

app.get('/', (req, res) => {
  res.type('text').send(`
🚀 Bienvenido a Chat Pocki — tu chatbot con flow 🤖

➡️  Documentación de la API: /api-docs
➡️  Endpoint de mensajes: /messages

Disfrutá esta vuelta 😎
  `);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada 🕵️‍♂️' });
});

app.use((err, req, res, next) => {
  console.error('❌ Error inesperado:', err);

  const statusCode = err.status || 500;
  const message = err.message || 'Error interno del servidor 😵‍💫';

  res.status(statusCode).json({ error: message });
});

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await initDB();
    await db.getConnection();
    console.log('✅ Conectado a la base de datos de AWS RDS');

    app.listen(PORT, () => {
      console.log(`🔥 Servidor prendido en http://localhost:${PORT}`);
      console.log(`📄 Swagger docs en http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('❌ Error al iniciar el servidor:', err);
  }
})();
