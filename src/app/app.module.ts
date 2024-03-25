import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { SharedModule } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { ClientModule } from "./components/client/client.module";
import { AccountBookModule } from "./contexts/taxi/adapters/secondary/account-book/account-book.module";
import { TaxiModule } from "./components/taxi/taxi.module";
import { DriveModule } from "./components/drive/drive.module";
import { RippleModule } from "primeng/ripple";
import { TaxiContextModule } from "./contexts/taxi/taxi-context.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    SharedModule,
    InputTextModule,
    FormsModule,

    ClientModule,
    TableModule,
    AccountBookModule,
    TaxiModule,
    DriveModule,
    RippleModule,

    TaxiContextModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
