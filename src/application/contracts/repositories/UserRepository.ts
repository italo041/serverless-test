import { UserBody } from "../../../adapters/types/UserParams";
import { UserInstance } from "../../../infrastructure/database/mysql/user/UserModel";

export interface UserRepository {
    getUsers(): Promise<UserInstance[]>,
    createUser(user: UserBody): Promise<UserInstance>
}