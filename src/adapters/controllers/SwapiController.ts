import { NextFunction, Request, Response } from "express";
import { response } from "../../infrastructure/network/response";
import { UserBody } from "../types/UserParams";
import { SwapiRepository } from "../../application/contracts/repositories/SwapiRepository";
import { Swapi } from "../../application/usecases/Swapi";
import { PeopleParams } from "../types/SwapiParams";

export class SwapiController {
  constructor(private swapiRepository: SwapiRepository) {
    this.getPeople = this.getPeople.bind(this);
  }

  async getPeople(req: Request, res: Response, next: NextFunction) {
    const swapi = new Swapi(this.swapiRepository);

    try {
      const { search } = req.query as PeopleParams;

      const people = await swapi.getPeople({ search });

      return response({
        req,
        res,
        status: 200,
        body: {
          message: "People from swapi",
          data: people,
        },
      });
    } catch (err) {
      return next(err);
    }
  } 
}
