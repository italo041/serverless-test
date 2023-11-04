import { Sequelize } from "sequelize";

import { DataBaseService } from "../../../application/contracts/services/DatabaseService";
import { DbConfig, Services } from "../../types/Mysql";

import { UserModel } from "./user/UserModel";
import { UserRepositoryMysql } from "./user/UserRepositoryMysql";

export class DataServicePostgre extends DataBaseService {
    private seque: { [key: string]: Sequelize } = {};

    private models = (connectR: Sequelize, connectE: Sequelize) => {
        // Models
        const userModel = new UserModel(connectR, connectE);

        return {
            userModel
        };
    };

    connect = (config: DbConfig): Sequelize => {
        const key = `${config.database}-${config.username}-mysql`;
        let sequelize: Sequelize = this.seque[key];
        if (!sequelize) {
            sequelize = new Sequelize(config.database, config.username, config.password, {
                host: config.host,
                port: parseInt(config.port),
                dialect: "mysql"
            });
            this.seque[key] = sequelize;
        }
        return sequelize;
    };

    services = (config: DbConfig): Services => {
        const connectR = this.connect(config);
        const connectE = this.connect(config);

        // Models
        const model = this.models(connectR, connectE);

        // Services
        const userRepository = new UserRepositoryMysql(model.userModel);

        return {
            userRepository,
        };
    };
}
