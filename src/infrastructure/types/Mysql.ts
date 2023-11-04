
import { UserRepositoryMysql } from "../database/mysql/user/UserRepositoryMysql";

type DbConfig = {
    host: string,
    database: string,
    port: string,
    username: string,
    password: string
}

type Services = {
    userRepository: UserRepositoryMysql,
}

export {
    DbConfig,
    Services
};
