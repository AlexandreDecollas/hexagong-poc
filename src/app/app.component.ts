import { Component, Inject, OnInit } from "@angular/core";
import Client from "./contexts/taxi/domain/model/client/client";
import TaxiCallCenter from "./contexts/taxi/domain/model/taxi-call-center/taxi-call-center";
import { ACCOUNT_BOOK } from "./contexts/taxi/adapters/account-book/account-book.service";
import AccountBook from "./contexts/taxi/domain/ports/account-book";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public clients: Array<Client> = [];
  private _taxiCallCenter!: TaxiCallCenter;

  constructor(
    @Inject(ACCOUNT_BOOK) private readonly _accountBook: AccountBook,
  ) {}

  public ngOnInit(): void {
    this._taxiCallCenter = new TaxiCallCenter(this._accountBook);
  }

  public addNewClient(): void {
    this.clients.push(new Client(this._taxiCallCenter));
  }
}
