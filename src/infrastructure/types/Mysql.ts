
import { UserRepositoryMysql } from "../database/mysql/user/UserRepositoryMysql";
import { ApiSwapiService } from "../externalServices/swapi";

type DbConfig = {
    host: string,
    database: string,
    port: string,
    username: string,
    password: string
}

type Services = {
    userRepository: UserRepositoryMysql,
    swapiService: ApiSwapiService,
}

export {
    DbConfig,
    Services
};
