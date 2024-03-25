import { Component } from "@angular/core";
import { TaxiUsecaseProvider } from "./contexts/taxi/adapters/primary/taxi-usecase.provider";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public clients: string[] = [];

  constructor(private readonly taxiUsecaseProvider: TaxiUsecaseProvider) {}

  public async addNewClient(): Promise<void> {
    this.clients.push(uuidv4());
  }

  public async bookATaxi(clientId: string): Promise<void> {
    await this.taxiUsecaseProvider.usecase.bookATaxi(clientId);
  }

  public async startDriving(clientId: string): Promise<void> {
    await this.taxiUsecaseProvider.usecase.driveToDestination(clientId);
  }
}
