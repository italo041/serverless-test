import { UserBody } from "../../adapters/types/UserParams";
import { UserRepository } from "../contracts/repositories/UserRepository";

export class User {
    constructor(
        private userRepository: UserRepository
    ){}

    async getUsers() {
        return this.userRepository.getUsers();
    }

    async createUser(body: UserBody) {
        return this.userRepository.createUser(body);
    }
}