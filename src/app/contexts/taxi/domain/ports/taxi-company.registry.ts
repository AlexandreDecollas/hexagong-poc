export interface TaxiCompanyRegistry {
  bookATaxi(clientId: string): Promise<string>;

  enterATaxi(clientId: string): Promise<void>;
}
