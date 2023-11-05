import { SwapiController } from "../../../src/adapters/controllers/SwapiController";
import { config } from "../../../src/infrastructure/config";
import { AppDependencies } from "../../../src/infrastructure/interfaces/Postgre";
import { DataServicePostgre } from "../../../src/infrastructure/database/mysql/DataServiceMysql";
const httpMocks = require("node-mocks-http");

const dependencies: AppDependencies = {
  dataBaseService: new DataServicePostgre(),
};

const services = dependencies.dataBaseService.services(config.db);

const swapiController = new SwapiController(services.swapiService);

describe("SwapiRepository", () => {
  it("getPerson should return a person object", async () => {
    let request = httpMocks.createRequest({
      method: "GET",
      query: {
        search: "Yoda",
      },
    });

    let response = httpMocks.createResponse();

    let mockNext = jest.fn();

    const expectedData = "Yodaaa";

    services.swapiService.getPerson = jest
      .fn()
      .mockImplementation(async () => expectedData);

    const personData = await swapiController.getPerson(
      request,
      response,
      mockNext
    );

    expect(response._getJSONData()).toEqual({
      message: "People from swapi",
      data: "Yodaaa",
    });
  });
});
