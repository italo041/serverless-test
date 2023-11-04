import { UserBody } from "../../../adapters/types/UserParams";
import { UserInstance } from "../../../infrastructure/database/mysql/user/UserModel";

export interface UserRepository {
    getUser(): Promise<void>,
    createUser(user: UserBody): Promise<UserInstance>
}