export interface UserRepository {
    getUser(): Promise<void>,
    createUser(): Promise<void>
}