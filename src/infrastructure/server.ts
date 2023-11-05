import express, { Application, Router } from "express";
import { config } from "./config";
import { apiRouter } from "./express/routes";
import { AppDependencies } from "./interfaces/Postgre";
import { DataServicePostgre } from "./database/mysql/DataServiceMysql";
import { Sequelize } from "sequelize";
import ServerlessHttp from "serverless-http";

const app: Application = express();

const dependencies: AppDependencies = {
  dataBaseService: new DataServicePostgre(),
};

export const connect: Sequelize = dependencies.dataBaseService.connect(
  config.db
);

connect
  .authenticate()
  .then((): void => {
    app.use(express.json());
    app.use("/api", apiRouter(dependencies));

    app.use((err: any, req: any, res: any, next: any) => {
      console.error(err.stack);
      res.status(500).json({ error: err.message });
    });

  })
  .catch((e) => console.log(e));

module.exports.handler = ServerlessHttp(app);
