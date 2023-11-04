import express, { NextFunction, Request, Response, Router } from "express";

import { config } from "../../config";
import { AppDependencies } from "../../interfaces/Postgre";

import { userRouter } from "./user";

export const apiRouter = (dependencies: AppDependencies): Router => {
    const router = express.Router();

    // Called to services
    const services = dependencies.dataBaseService.services(config.db);

    // Loading services to routes
    const user = userRouter(services);

    router.use("*", (req: Request, res: Response, next: NextFunction) => {
        res.removeHeader("X-Powered-By");
        return next();
    });

    router.use("/user", user);

    return router;
};
