import { UserBody } from "../../../../adapters/types/UserParams";
import { UserRepository } from "../../../../application/contracts/repositories/UserRepository";
import { UserInstance, UserModel } from "./UserModel";

export class UserRepositoryMysql implements UserRepository {
    constructor(
        private userModel: UserModel,
    ) { }

    createUser = async (user: UserBody): Promise<UserInstance> => {
        const userCreated = await this.userModel.execute.create({ name: user.name as string })
        return userCreated ;
    };

    getUser = async (): Promise<void> => {
        console.log("createuser");

        return ;
    };
}
