import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { Table, TableModule } from "primeng/table";
import { DriveModule } from "./components/drive/drive.module";
import { AccountBookModule } from "./contexts/taxi/adapters/secondary/account-book/account-book.module";
import { MockComponents } from "ng-mocks";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TableModule, DriveModule, AccountBookModule],
      declarations: [AppComponent, MockComponents(Table)],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
