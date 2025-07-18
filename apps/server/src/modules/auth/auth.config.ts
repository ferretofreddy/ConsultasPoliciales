import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
// 1. Cambiamos la importación a 'bcryptjs'
import bcrypt from 'bcryptjs';
import { db } from '../../config/db';
import { users, User } from '@consultas/shared/schema';
import { eq } from 'drizzle-orm';

export function setupPassport() {
  // El resto del código funciona exactamente igual.
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await db.query.users.findFirst({
          where: eq(users.email, email),
        });

        if (!user) {
          return done(null, false, { message: 'Correo electrónico no encontrado.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Contraseña incorrecta.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, (user as User).id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await db.query.users.findFirst({ where: eq(users.id, id) });
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}
