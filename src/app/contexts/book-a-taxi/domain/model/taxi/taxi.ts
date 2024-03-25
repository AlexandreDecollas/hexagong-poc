import TaxiCallCenter from '../taxi-call-center/taxi-call-center';
import Client from '../client/client';

export default class Taxi {

    private _shipClient: boolean = false;
    private _hasFinishedCurrentDrive: boolean = true;
    private _currentClient: Client | null = null;

    constructor(
        private readonly _taxiCallCenter: TaxiCallCenter
    ) {
    }

    public isDriving(): boolean {
        return true;
    }

    public driveClientToDestination() {
        this._hasFinishedCurrentDrive = true;
        if (this._currentClient === null) {
            return;
        }
        this._taxiCallCenter.clientPaidTheBill(this, this._currentClient);
    }

    public enter(client: Client): void {
        this._currentClient = client;
        this._shipClient = true;
        this._hasFinishedCurrentDrive = false;
    }

    public hasFinishedDrive(): boolean {
        return this._hasFinishedCurrentDrive;
    }
}
