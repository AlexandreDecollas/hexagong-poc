import Taxi from '../model/taxi/taxi';
import Client from '../model/client/client';

export default interface AccountBook {

    registerDrive(taxi: Taxi): void
    registerClientBill(taxi: Taxi, client: Client): void

}
