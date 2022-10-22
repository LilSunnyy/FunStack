import express from "express";
import { getUserById } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/:id", getUserById);

// router.post("/user", (req, res) => {
//   res.send("USER");
// });

// router.put("/user", (req, res) => {
//   res.send("USER");
// });

// router.delete("/user", (req, res) => {
//   res.send("USER");
// });

export default router;
