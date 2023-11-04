import { Sequelize } from "sequelize";

import { DbConfig, Services } from "../../../infrastructure/types/Mysql";

export abstract class DataBaseService {
  abstract connect(config: DbConfig): Sequelize;

  abstract services(config: DbConfig): Services;
}
