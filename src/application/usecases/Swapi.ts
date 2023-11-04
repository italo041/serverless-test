import { PeopleParams } from "../../adapters/types/SwapiParams";
import { SwapiRepository } from "../contracts/repositories/SwapiRepository";

export class Swapi {
    constructor(
        private swapiRepository: SwapiRepository
    ){}

    async getPeople(query: PeopleParams) {
        return this.swapiRepository.getPeople(query);
    }
}