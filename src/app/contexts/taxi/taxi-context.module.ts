import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TAXI_COMPANY_REGISTRY } from "./domain/ports/taxi-company.registry";
import { InMemoryTaxiCompanyRegistry } from "./adapters/secondary/in-memory-taxi-company.registry";

@NgModule({
  declarations: [],
  providers: [
    {
      provide: TAXI_COMPANY_REGISTRY,
      useClass: InMemoryTaxiCompanyRegistry,
    },
  ],
  imports: [CommonModule],
})
export class TaxiContextModule {}
