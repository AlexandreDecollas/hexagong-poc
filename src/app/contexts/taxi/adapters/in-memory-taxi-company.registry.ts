import { TaxiCompanyRegistry } from "../domain/ports/taxi-company.registry";
import { v4 as uuidv4 } from "uuid";

type ClientId = string;
type ReservationRef = string;

export class InMemoryTaxiCompanyRegistry implements TaxiCompanyRegistry {
  public bookRegistry = new Map<ClientId, ReservationRef>();
  public clientsInATaxi: string[] = [];
  public async bookATaxi(clientId: ClientId): Promise<ReservationRef> {
    const ref = uuidv4();
    this.bookRegistry.set(clientId, ref);

    return ref;
  }

  public async enterATaxi(clientId: ClientId): Promise<void> {
    if (!this.bookRegistry.has(clientId)) {
      throw new Error("No reservation found for this client");
    }

    this.clientsInATaxi.push(clientId);
  }

  public async driveClientToDestination(clientId: string): Promise<void> {
    this.clientsInATaxi = this.clientsInATaxi.filter(
      (c: ClientId) => c !== clientId,
    );
  }
}
