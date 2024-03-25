import Taxi from '../taxi/taxi';
import TaxiCallCenter from '../taxi-call-center/taxi-call-center';


export default class Client {

    private _reservedTaxi: Taxi | null = null;

    constructor(private readonly _taxiCallCenter: TaxiCallCenter) {
    }


    public reserveTaxi(): Taxi {
        this._reservedTaxi = this._taxiCallCenter.reserveTaxi();
        return this._reservedTaxi;
    }

    public enterReservedTaxi(): void {
        this._reservedTaxi?.enter(this);
    }


    public hasPayTheBill(): boolean {
        return this._reservedTaxi === null ? false : this._reservedTaxi.hasFinishedDrive();
    }
}
