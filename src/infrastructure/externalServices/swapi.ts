/* eslint-disable camelcase */
import axios, { AxiosInstance } from "axios";
import { SwapiService } from "../../application/contracts/services/SwapiService";
import { config } from "../config";
import { PeopleParams } from "../../adapters/types/SwapiParams";

class ApiSwapiService implements SwapiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const { url } = config.apis.swapi;
    this.axiosInstance = axios.create({ baseURL: url });
  }

  getPeople = async (params: PeopleParams): Promise<[]> => {
    try {  
      const resp = await this.axiosInstance?.get(`/people?search=${params.search}`);

      if (!resp || !resp.data) throw new Error("Datos no encontrados");

      return resp.data;
    } catch (err) {
      let e;
      if (axios.isAxiosError(err)) e = err;
      else e = err as Error;
      throw new Error(`[err-Swapi] ${e ? e.message : e}`);
    }
  };
}

export { ApiSwapiService };
