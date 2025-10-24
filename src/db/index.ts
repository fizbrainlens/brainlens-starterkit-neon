import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

dotenv.config({
    path: ".env.local",
})

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in .env file");
}

const client = neon(process.env.DATABASE_URL);
export const db = drizzle(client);