import { PersonParams } from "../../../adapters/types/SwapiParams";

export interface SwapiRepository {
    getPerson(params: PersonParams): Promise<any>,
}