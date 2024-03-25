import { TaxiUsecase } from "./taxi.usecase";
import { InMemoryTaxiCompanyRegistry } from "../adapters/in-memory-taxi-company.registry";

describe(`Taxi usecase`, () => {
  let taxiCompanyRegistry = new InMemoryTaxiCompanyRegistry();
  let usecase: TaxiUsecase;

  beforeEach(() => {
    usecase = new TaxiUsecase(taxiCompanyRegistry);
  });

  it(`should book a taxi`, async () => {
    const clientId = "123";

    const reservationRefResponse: string = await usecase.bookATaxi(clientId);

    const reservationRef = taxiCompanyRegistry.registry.get(clientId);
    expect(reservationRefResponse).toEqual(reservationRef);
  });
});
