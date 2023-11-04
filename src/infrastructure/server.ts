import express, { Application, Router } from "express";
import { config } from "./config";
import { apiRouter } from "./express/routes";
import { AppDependencies } from "./interfaces/Postgre";
import { DataServicePostgre } from "./database/mysql/DataServiceMysql";
import { Sequelize } from "sequelize";

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
    app.use("/api", apiRouter(dependencies));

    app.listen(config.app.port, () =>
      console.log(`Listen on port ${config.app.port}`)
    );
  })
  .catch((e) => console.log(e));
