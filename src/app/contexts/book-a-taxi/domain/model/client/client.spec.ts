import Client from './client';
import Taxi from '../taxi/taxi';
import spyOn = jest.spyOn;
import TaxiCallCenter from '../taxi-call-center/taxi-call-center';
import AccountBook from '../../ports/account-book';

describe('Client', () => {
    let client: Client;
    let taxiCallCenter: TaxiCallCenter;
    let accountBook: AccountBook = {
        registerDrive: jest.fn(),
        registerClientBill: jest.fn()
    };

    beforeEach(() => {
        taxiCallCenter = new TaxiCallCenter(accountBook);
        client = new Client(taxiCallCenter);
    });

    it('should be able to reserve a drive', () => {
        const taxi: Taxi = client.reserveTaxi();
        expect(taxi).not.toBeNull();
        expect(taxi).not.toBeUndefined();
    });

    it('should call the taxi call center for reservation', () => {
        spyOn(taxiCallCenter, 'reserveTaxi').mockReturnValueOnce(new Taxi(taxiCallCenter));

        client.reserveTaxi();

        expect(taxiCallCenter.reserveTaxi).toHaveBeenCalled();
    });

    it('should make a taxi start driving when it gets in', () => {
        const taxi: Taxi = client.reserveTaxi();

        client.enterReservedTaxi();

        expect(taxi.isDriving()).toBeTruthy();
    });

    it('should pay the bill after the drive', () => {
        const taxi: Taxi = client.reserveTaxi();

        client.enterReservedTaxi();

        taxi.driveClientToDestination();

        expect(client.hasPayTheBill()).toBeTruthy();
    });

    it('should not pay the bill until the drive is not finished', () => {
        client.reserveTaxi();
        client.enterReservedTaxi();

        expect(client.hasPayTheBill()).toBeFalsy();
    });
});
