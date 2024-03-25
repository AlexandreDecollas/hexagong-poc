export interface TaxiCompanyRegistry {
  bookATaxi(clientId: string): Promise<string>;

  enterATaxi(clientId: string): Promise<void>;

  driveClientToDestination(clientId: string): Promise<void>;
}
