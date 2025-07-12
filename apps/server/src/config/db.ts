import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@consultas/shared';
import 'dotenv/config';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });