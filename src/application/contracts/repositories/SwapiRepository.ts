import { PeopleParams } from "../../../adapters/types/SwapiParams";

export interface SwapiRepository {
    getPeople(params: PeopleParams): Promise<[]>,
}