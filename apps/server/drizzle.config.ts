import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
  schema: '../../packages/shared/src/schema.ts',
  out: './src/config/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;