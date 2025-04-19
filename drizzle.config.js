/** @type { import("drizzle-kit").Config} */
import 'dotenv/config'; // Loads environment variables from .env

export default {
  dialect: 'postgresql',
  schema: './configs/schema.js',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
  },
};
