import { NextFunction, Request, Response } from "express";
import { response } from "../../infrastructure/network/response";
import { SwapiRepository } from "../../application/contracts/repositories/SwapiRepository";
import { Swapi } from "../../application/usecases/Swapi";
import { PersonParams } from "../types/SwapiParams";

export class SwapiController {
  constructor(private swapiRepository: SwapiRepository) {
    this.getPerson = this.getPerson.bind(this);
  }

  async getPerson(req: Request, res: Response, next: NextFunction) {
    const swapi = new Swapi(this.swapiRepository);

    try {
      const { search } = req.query as PersonParams;

      const people = await swapi.getPerson({ search });

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
