import express, { Router } from "express";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";

const swaggerConfigOas3 = YAML.load("./src/infrastructure/config/swagger.yaml");

export const swaggerRouter = (): Router => {
    const router = express.Router();

    router.use("/", swaggerUI.serveWithOptions({ redirect: false }));
    router.get("/", swaggerUI.setup(swaggerConfigOas3));

    return router;
};
