import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-taxi",
  templateUrl: "./taxi.component.html",
  styleUrls: ["./taxi.component.css"],
})
export class TaxiComponent {
  @Input() public clientId!: string;
  @Output() public clientEnteredTheTaxi = new EventEmitter<void>();
  @Output() public startedDriving = new EventEmitter<void>();

  public isTaxiEntered = false;

  public enterTaxi(): void {
    this.isTaxiEntered = true;
  }

  public startDriving(): void {
    this.startedDriving.next();
  }
}
