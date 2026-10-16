import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Couldn't connect to Database: DATABASE_URL is missing");
}

export const pool = new Pool({
  connectionString,
});

export const db = drizzle({ client: pool });

export const connectDB = async () => {
  await pool.query("SELECT 1");
  console.log("Database connected");
};
