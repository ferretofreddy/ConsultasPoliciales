import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import session from 'express-session';
import passport from 'passport';
import { setupPassport } from './modules/auth/auth.config';

// Importamos los routers
import personasRouter from './modules/personas/personas.routes';
import authRouter from './modules/auth/auth.routes';

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares básicos
app.use(cors({ origin: '*' })); // Ajusta esto en producción
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- CONFIGURACIÓN DE SESIONES Y PASSPORT ---
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'un_secreto_muy_seguro_para_desarrollo',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // En producción, usar cookies seguras (HTTPS)
      maxAge: 1000 * 60 * 60 * 24, // Duración de la sesión: 1 día
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Llamamos a la función que configura las estrategias de passport
setupPassport();
// -----------------------------------------

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente' });
});

// --- CONECTAR RUTAS DE MÓDULOS ---
app.use('/api/auth', authRouter);
app.use('/api/personas', personasRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
