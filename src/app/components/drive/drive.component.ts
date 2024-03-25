import { Component, EventEmitter, Input, Output } from "@angular/core";
import Client from "../../contexts/taxi/domain/model/client/client";
import Taxi from "../../contexts/taxi/domain/model/taxi/taxi";

@Component({
  selector: "app-drive",
  templateUrl: "./drive.component.html",
  styleUrls: ["./drive.component.css"],
})
export class DriveComponent {
  @Input() public client!: Client;
  @Output() public reservedATaxi: EventEmitter<void> = new EventEmitter<void>();

  public taxiReserved = false;
  public taxi!: Taxi;

  public reserveTaxi(): void {
    this.taxi = this.client.reserveTaxi();
    this.taxiReserved = true;
  }

  public enteredTaxi(client: Client) {
    client.enterReservedTaxi();
  }

  public startedDrive(taxi: Taxi) {
    taxi.driveClientToDestination();
  }
}
