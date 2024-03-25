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
import { AccountBookModule } from "./contexts/taxi/adapters/account-book/account-book.module";
import { TaxiModule } from "./components/taxi/taxi.module";
import { DriveModule } from "./components/drive/drive.module";
import { RippleModule } from "primeng/ripple";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
