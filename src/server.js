import express from "express";
import * as dotenv from "dotenv";
// import { connection } from "./db/db-connection.js";
import route from "./routes/index.js";
dotenv.config();

// init express
const app = express();

const PORT = process.env.PORT || 3000;

// var username, age;
// connection.query("SELECT * FROM user", (err, results, fields) => {
//   console.log(results);
//   username = results[0].username;
//   age = results[0].age;
// });
app.use(route);

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}! on https://localhost:${PORT}`
  );
});
