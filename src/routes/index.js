import userRoute from "./user.route.js";
import express from "express";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/",
    route: (req, res) => {
      res.send("HELLO");
    },
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
