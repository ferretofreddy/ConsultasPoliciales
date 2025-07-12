import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// Importamos el router de nuestro nuevo módulo
import personasRouter from './modules/personas/personas.routes';

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares básicos
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

// --- CONECTAR RUTAS DE MÓDULOS ---
app.use('/api/personas', personasRouter);
// (Aquí conectaremos los futuros routers de vehiculos, inmuebles, etc.)

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});