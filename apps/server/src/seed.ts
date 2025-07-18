    import 'dotenv/config';
    import { db } from './config/db';
    import { users, NewUser } from '@consultas/shared/schema';
    import bcrypt from 'bcryptjs';
    import { eq } from 'drizzle-orm';

    async function seed() {
      console.log('🌱 Empezando el proceso de siembra...');

      const adminEmail = 'ferretofreddy@gmail.com';
      const adminPassword = '6341833Elizabeth@';

      // 1. Verificar si el usuario ya existe
      const existingAdmin = await db.query.users.findFirst({
        where: eq(users.email, adminEmail),
      });

      if (existingAdmin) {
        console.log(`✅ El usuario administrador '${adminEmail}' ya existe. No se necesita acción.`);
        process.exit(0);
      }

      // 2. Si no existe, hashear la contraseña
      console.log('🔒 Hasheando la contraseña del administrador...');
      const hashedPassword = await bcrypt.hash(adminPassword, 12);

      // 3. Crear el nuevo usuario administrador
      const newAdmin: NewUser = {
        email: adminEmail,
        password: hashedPassword,
        role: 'admin', // Asignamos el rol de 'admin'
      };

      await db.insert(users).values(newAdmin);

      console.log('✅ Usuario administrador creado exitosamente!');
      console.log(`📧 Email: ${adminEmail}`);
      console.log(`🔑 Contraseña: ${adminPassword}`);
      console.log('✨ Proceso de siembra completado.');

      process.exit(0);
    }

    seed().catch((error) => {
      console.error('❌ Error durante el proceso de siembra:', error);
      process.exit(1);
    });
    