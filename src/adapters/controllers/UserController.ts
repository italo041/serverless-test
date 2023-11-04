import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../application/contracts/repositories/UserRepository";
import { User } from "../../application/usecases/User";
import { response } from "../../infrastructure/network/response";

export class UserController {
    constructor(
        private userRepository: UserRepository
    ) {
        this.createUser = this.createUser.bind(this);
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        const user = new User(this.userRepository);

        try {
            //const { name } = req.body;

            const save = await user.createUser();
            
            return response({
                req,
                res,
                status: 201,
                body: {
                    message: "User created",
                    data: save
                }
            });

        } catch (err) {
            return next(err);
        }
    }
}