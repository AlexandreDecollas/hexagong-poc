export interface TaxiCompanyRegistry {
  bookATaxi(clientId: string): Promise<string>;
}
