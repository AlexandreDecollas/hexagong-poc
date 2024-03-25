import { Injectable, InjectionToken } from "@angular/core";
import AccountBook from "../../domain/ports/account-book";
import Taxi from "../../domain/model/taxi/taxi";
import Client from "../../domain/model/client/client";

export let ACCOUNT_BOOK = new InjectionToken<AccountBook>("AccountBook");

@Injectable()
export class AccountBookService implements AccountBook {
  constructor() {}

  public registerClientBill(taxi: Taxi, client: Client): void {
    console.log("RegisterClientBill");
  }

  public registerDrive(taxi: Taxi): void {
    console.log("registerDrive");
  }
}
