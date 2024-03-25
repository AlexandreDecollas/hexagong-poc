import { Inject, Injectable } from "@angular/core";
import { TaxiUsecase } from "../../domain/taxi.usecase";
import {
  TaxiCompanyRegistry,
  TAXI_COMPANY_REGISTRY,
} from "../../domain/ports/taxi-company.registry";

@Injectable({ providedIn: "root" })
export class TaxiUsecaseProvider {
  public usecase: TaxiUsecase;

  constructor(
    @Inject(TAXI_COMPANY_REGISTRY)
    private readonly taxiCompanyRegistry: TaxiCompanyRegistry,
  ) {
    this.usecase = new TaxiUsecase(this.taxiCompanyRegistry);
  }
}
