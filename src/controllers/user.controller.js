import { connection } from "../db/db-connection.js";

// function getUserById
export const getUserById = async (req, res) => {
  const { id } = req.params;
  const [rows, fields] = await connection
    .promise()
    .query(`select * from user where id =${id}`);
  res.send(rows);
};
