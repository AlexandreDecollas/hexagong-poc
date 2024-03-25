import { BookATaxiUsecase } from "./book-a-taxi.usecase";
import { InMemoryTaxiCompanyRegistry } from "../adapters/in-memory-taxi-company.registry";

describe(`Book a taxi usecase`, () => {
  let taxiCompanyRegistry = new InMemoryTaxiCompanyRegistry();
  let usecase: BookATaxiUsecase;

  beforeEach(() => {
    usecase = new BookATaxiUsecase(taxiCompanyRegistry);
  });

  it(`should book a taxi`, async () => {
    const clientId = "123";

    const reservationRefResponse: string = await usecase.bookATaxi(clientId);

    const reservationRef = taxiCompanyRegistry.registry.get(clientId);
    expect(reservationRefResponse).toEqual(reservationRef);
  });
});
