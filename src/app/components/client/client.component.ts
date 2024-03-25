import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"],
})
export class ClientComponent {
  @Output() public bookATaxi: EventEmitter<void> = new EventEmitter<void>();

  public callForReservation(): void {
    this.bookATaxi.next();
  }
}
