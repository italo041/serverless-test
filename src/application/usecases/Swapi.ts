import { PersonParams } from "../../adapters/types/SwapiParams";
import { SwapiRepository } from "../contracts/repositories/SwapiRepository";

export class Swapi {
    constructor(
        private swapiRepository: SwapiRepository
    ){}

    async getPerson(query: PersonParams) {
        return this.swapiRepository.getPerson(query);
    }
}