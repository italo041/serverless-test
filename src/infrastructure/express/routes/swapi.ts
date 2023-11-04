import express, { Router } from "express";
import { Services } from "../../types/Mysql";
import { SwapiController } from "../../../adapters/controllers/SwapiController";

export const swapiRouter = (services: Services): Router => {
  const router = express.Router();
  const controller = new SwapiController(services.swapiService);

  router.route("/").get(controller.getPeople); // Create

  return router;
};