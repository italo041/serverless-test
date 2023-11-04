import { UserRepository } from "../contracts/repositories/UserRepository";

export class User {
    constructor(
        private userRepository: UserRepository
    ){}

    async getUser() {
        return this.userRepository.getUser();
    }

    async createUser() {
        return this.userRepository.createUser();
    }
}