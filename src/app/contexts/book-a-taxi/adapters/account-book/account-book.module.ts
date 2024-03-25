import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ACCOUNT_BOOK, AccountBookService} from './account-book.service';


@NgModule({
    providers: [
        {
            provide: ACCOUNT_BOOK,
            useClass: AccountBookService
        }
    ],
    imports: [
        CommonModule
    ]
})
export class AccountBookModule {
}
