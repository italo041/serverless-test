import { PeopleParams } from "../../../adapters/types/SwapiParams";

interface SwapiService {
    getPeople(params: PeopleParams): Promise<[]>,
}

export { SwapiService };
