import {Injectable, InjectionToken} from '@angular/core';
import AccountBook from '../../domain/ports/account-book';
import Taxi from '../../domain/model/taxi/taxi';
import Client from '../../domain/model/client/client';
import * as io from 'socket.io-client';
import Socket = SocketIOClient.Socket;

export let ACCOUNT_BOOK = new InjectionToken<AccountBook>('AccountBook');

@Injectable()
export class AccountBookService implements AccountBook {


    public registerClientBill(taxi: Taxi, client: Client): void {
        console.log('registerClientBill');
    }

    public registerDrive(taxi: Taxi): void {
        console.log('registerDrive');
    }

    public registerClientReservation(client: Client, taxi: Taxi): void {
    }
}
