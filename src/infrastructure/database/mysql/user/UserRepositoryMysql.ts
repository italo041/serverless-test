import { UserRepository } from "../../../../application/contracts/repositories/UserRepository";
import { UserModel } from "./UserModel";

export class UserRepositoryMysql implements UserRepository {
    constructor(
        private userModel: UserModel,
    ) { }

    createUser = async (): Promise<void> => {
        console.log("createuser");

        return ;
    };

    getUser = async (): Promise<void> => {
        console.log("createuser");

        return ;
    };
}
