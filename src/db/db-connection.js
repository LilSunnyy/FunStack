import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});
