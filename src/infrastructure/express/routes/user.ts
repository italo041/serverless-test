import express, { Router } from "express";
import { UserController } from "../../../adapters/controllers/UserController";
import { config } from "../../config";
import { Services } from "../../types/Mysql";

export const userRouter = (services: Services): Router => {
  const router = express.Router();
  const controller = new UserController(services.userRepository);

  router.route("/").get(controller.getUsers); // Create
  router.route("/").post(controller.createUser); // Create

  return router;
};
