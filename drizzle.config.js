/** @type { import("drizzle-kit").Config} */
export default {
    dialect: "postgresql",
    schema: "./configs/schema.js",
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_IWK5nNj7lyOi@ep-red-sky-a4ey13x1-pooler.us-east-1.aws.neon.tech/ai-short-generator?sslmode=require'
    }
  };
  