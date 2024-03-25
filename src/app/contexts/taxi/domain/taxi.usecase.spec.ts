import { TaxiUsecase } from "./taxi.usecase";
import { InMemoryTaxiCompanyRegistry } from "../adapters/secondary/in-memory-taxi-company.registry";

describe(`Taxi usecase`, () => {
  let taxiCompanyRegistry: InMemoryTaxiCompanyRegistry;
  let usecase: TaxiUsecase;
  const clientId = "123";

  beforeEach(() => {
    taxiCompanyRegistry = new InMemoryTaxiCompanyRegistry();
    usecase = new TaxiUsecase(taxiCompanyRegistry);
  });

  it(`should book a taxi`, async () => {
    const reservationRefResponse: string = await usecase.bookATaxi(clientId);

    const reservationRef = taxiCompanyRegistry.bookRegistry.get(clientId);
    expect(reservationRefResponse).toEqual(reservationRef);
  });

  it(`should not be able to enter a taxi when the client has no reservation`, async () => {
    expect.assertions(1);

    try {
      await usecase.enterATaxi(clientId);
    } catch (e: any) {
      expect(e.message).toEqual("No reservation found for this client");
    }
  });

  it(`should be able to enter a taxi when the client has a reservation`, async () => {
    await usecase.bookATaxi(clientId);

    await usecase.enterATaxi(clientId);

    expect(taxiCompanyRegistry.clientsInATaxi.includes(clientId)).toEqual(true);
  });

  it(`should drive the client to destination`, async () => {
    taxiCompanyRegistry.clientsInATaxi.push(clientId);

    await usecase.driveToDestination(clientId);

    expect(taxiCompanyRegistry.clientsInATaxi.includes(clientId)).toEqual(
      false,
    );
  });
});
