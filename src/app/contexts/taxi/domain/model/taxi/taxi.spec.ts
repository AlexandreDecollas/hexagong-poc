import Taxi from './taxi';
import TaxiCallCenter from '../taxi-call-center/taxi-call-center';
import Client from '../client/client';
import AccountBook from '../../ports/account-book';
import spyOn = jest.spyOn;

describe('Taxi', () => {
    let taxi: Taxi;

    const accountBook: AccountBook = {
        registerDrive: jest.fn(),
        registerClientBill: jest.fn()
    };
    let taxiCallCenter: TaxiCallCenter;

    beforeEach(() => {
        taxiCallCenter = new TaxiCallCenter(accountBook);
        taxi = new Taxi(taxiCallCenter);
        spyOn(taxiCallCenter, 'reserveTaxi').mockReturnValue(taxi);
    });

    it('should notify the call center when it takes a drive', () => {
        spyOn(taxiCallCenter, 'clientPaidTheBill');
        const client: Client = new Client(taxiCallCenter);
        const taxi: Taxi = client.reserveTaxi();

        client.enterReservedTaxi();

        taxi.driveClientToDestination();

        expect(taxiCallCenter.clientPaidTheBill).toHaveBeenCalledWith(taxi, client);
    });

});
