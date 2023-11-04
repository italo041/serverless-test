/* eslint-disable camelcase */
import axios, { AxiosInstance } from "axios";
import { SwapiService } from "../../application/contracts/services/SwapiService";
import { config } from "../config";
import { PersonParams } from "../../adapters/types/SwapiParams";

class ApiSwapiService implements SwapiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const { url } = config.apis.swapi;
    this.axiosInstance = axios.create({ baseURL: url });
  }

  getPerson = async (params: PersonParams): Promise<any> => {
    try {
      console.log(params);
      
      const resp = await this.axiosInstance?.get(
        `/people?search=${params.search}`
      );

      if (!resp || !resp.data.results[0]) throw new Error("Datos no encontrados");

      const turned = await this.translateObject(resp.data.results[0]);
        
      return turned;
    } catch (err) {
      let e;
      if (axios.isAxiosError(err)) e = err;
      else e = err as Error;
      throw new Error(`[err-Swapi] ${e ? e.message : e}`);
    }
  };

  translationMap: any = {
    name: "nombre",
    height: "altura",
    mass: "peso",
    hair_color: "color_pelo",
    skin_color: "color_piel",
    eye_color: "color_ojos",
    birth_year: "anio_nacimiento",
    gender: "genero",
    homeworld: "mundo_natal",
    films: "peliculas",
    species: "especies",
    vehicles: "vehiculos",
    starships: "naves_estelares",
    created: "creado",
    edited: "editado",
  };

  renameObjectKey = async (obj: any, oldKey: any, newKey: any) => {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  };

  translateObject = async (object: any) => {
    for (const field in object) {
      if (this.translationMap[field]) {
        this.renameObjectKey(object, field, this.translationMap[field]);
      }
    }
    return object;
  };
}

export { ApiSwapiService };
