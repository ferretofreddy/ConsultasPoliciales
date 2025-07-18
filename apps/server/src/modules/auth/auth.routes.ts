import { Router } from 'express';
import passport from 'passport';

const router: Router = Router();

// Ruta de Login: POST /api/auth/login
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Si passport.authenticate tiene éxito, el usuario ya está en req.user
  // Enviamos de vuelta los datos del usuario (sin la contraseña)
  const { password, ...userWithoutPassword } = req.user as any;
  res.json({ message: 'Inicio de sesión exitoso', user: userWithoutPassword });
});

// Ruta de Logout: POST /api/auth/logout
router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Cierre de sesión exitoso' });
  });
});

// Ruta para verificar el estado de la sesión: GET /api/auth/status
router.get('/status', (req, res) => {
  if (req.isAuthenticated()) {
    const { password, ...userWithoutPassword } = req.user as any;
    res.json({ isAuthenticated: true, user: userWithoutPassword });
  } else {
    res.json({ isAuthenticated: false, user: null });
  }
});

export default router;
