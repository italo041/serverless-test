import { PersonParams } from "../../../adapters/types/SwapiParams";

interface SwapiService {
    getPerson(params: PersonParams): Promise<[]>,
}

export { SwapiService };
