import { TaxiCompanyRegistry } from "./ports/taxi-company.registry";

export class TaxiUsecase {
  constructor(private readonly taxiCompanyRegistry: TaxiCompanyRegistry) {}

  public async bookATaxi(clientId: string): Promise<string> {
    return this.taxiCompanyRegistry.bookATaxi(clientId);
  }
}
