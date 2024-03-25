import TaxiCallCenter from "./taxi-call-center";
import AccountBook from "../../ports/account-book";
import Taxi from "../taxi/taxi";
import spyOn = jest.spyOn;
import Client from "../client/client";

describe("TaxiCallCenter", () => {
  let taxiCallCenter: TaxiCallCenter;
  const accountBook: AccountBook = {
    registerDrive: jest.fn(),
    registerClientBill: jest.fn(),
  };

  beforeEach(() => {
    taxiCallCenter = new TaxiCallCenter(accountBook);
  });

  it("should register drive when client reserve taxi", () => {
    spyOn(accountBook, "registerDrive");
    const taxi: Taxi = taxiCallCenter.reserveTaxi();

    expect(accountBook.registerDrive).toHaveBeenCalledWith(taxi);
  });

  it(`should register when client have paid the drive's bill`, () => {
    spyOn(accountBook, "registerClientBill");

    const client: Client = new Client(taxiCallCenter);
    const taxi: Taxi = client.reserveTaxi();
    client.enterReservedTaxi();
    taxi.driveClientToDestination();

    taxiCallCenter.clientPaidTheBill(taxi, client);

    expect(accountBook.registerClientBill).toHaveBeenCalledWith(taxi, client);
  });
});
