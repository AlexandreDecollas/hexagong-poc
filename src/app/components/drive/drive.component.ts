import { Component, EventEmitter, Input, Output } from "@angular/core";
import Client from "../../contexts/taxi/domain/model/client/client";
import Taxi from "../../contexts/taxi/domain/model/taxi/taxi";

@Component({
  selector: "app-drive",
  templateUrl: "./drive.component.html",
  styleUrls: ["./drive.component.css"],
})
export class DriveComponent {
  @Input() public clientId!: string;
  @Output() public bookATaxi: EventEmitter<void> = new EventEmitter<void>();
  @Output() public startDriving: EventEmitter<void> = new EventEmitter<void>();

  public taxiBooked = false;

  public reserveTaxi(): void {
    this.bookATaxi.next();
    this.taxiBooked = true;
  }

  public startedDrive(): void {
    this.startDriving.next();
  }
}
