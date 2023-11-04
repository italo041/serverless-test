import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../application/contracts/repositories/UserRepository";
import { User } from "../../application/usecases/User";
import { response } from "../../infrastructure/network/response";
import { UserBody } from "../types/UserParams";

export class UserController {
  constructor(private userRepository: UserRepository) {
    this.createUser = this.createUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    const user = new User(this.userRepository);

    try {
      const { name } = req.body as UserBody;

      const save = await user.createUser({ name });

      return response({
        req,
        res,
        status: 201,
        body: {
          message: "User created",
          data: save,
        },
      });
    } catch (err) {
      return next(err);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    const user = new User(this.userRepository);

    try {
      const users = await user.getUsers();

      return response({
        req,
        res,
        status: 200,
        body: {
          message: "Get users",
          data: users,
        },
      });
    } catch (err) {
      return next(err);
    }
  }
}
