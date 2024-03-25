import { Component, EventEmitter, Input, Output } from "@angular/core";
import Client from "../../contexts/book-a-taxi/domain/model/client/client";
import Taxi from "../../contexts/book-a-taxi/domain/model/taxi/taxi";

@Component({
  selector: "app-taxi",
  templateUrl: "./taxi.component.html",
  styleUrls: ["./taxi.component.css"],
})
export class TaxiComponent {
  @Input() public client!: Client;
  @Input() public taxi!: Taxi;
  @Output() public enteredTaxi: EventEmitter<Client> =
    new EventEmitter<Client>();
  @Output() public startedDrive: EventEmitter<Taxi> = new EventEmitter<Taxi>();

  public clientEntered = false;
  public clientDriveFinished = false;

  public enterTaxi(): void {
    this.clientEntered = true;
    this.enteredTaxi.next(this.client);
  }

  public startDriving(): void {
    this.clientDriveFinished = true;
    this.startedDrive.next(this.taxi);
  }
}
