import { TaxiCompanyRegistry } from "../domain/ports/taxi-company.registry";
import { v4 as uuidv4 } from "uuid";

export class InMemoryTaxiCompanyRegistry implements TaxiCompanyRegistry {
  public registry = new Map<string, string>();

  public async bookATaxi(clientId: string): Promise<string> {
    const ref = uuidv4();
    this.registry.set(clientId, ref);

    return ref;
  }
}
