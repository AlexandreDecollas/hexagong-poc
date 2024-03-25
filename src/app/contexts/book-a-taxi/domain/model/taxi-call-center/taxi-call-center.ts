import Taxi from '../taxi/taxi';
import Client from '../client/client';
import AccountBook from '../../ports/account-book';

export default class TaxiCallCenter {

    constructor(private readonly _accountBook: AccountBook) {
    }

    public reserveTaxi(): Taxi {
        const taxi: Taxi = new Taxi(this);
        this._accountBook.registerDrive(taxi);
        return taxi;
    };

    public clientPaidTheBill(taxi: Taxi, client: Client): void {
        this._accountBook.registerClientBill(taxi, client);
    }
}
