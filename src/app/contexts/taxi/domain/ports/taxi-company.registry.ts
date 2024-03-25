export const TAXI_COMPANY_REGISTRY = Symbol("TAXI_COMPANY_REGISTRY");

export interface TaxiCompanyRegistry {
  bookATaxi(clientId: string): Promise<string>;

  enterATaxi(clientId: string): Promise<void>;

  driveClientToDestination(clientId: string): Promise<void>;
}
