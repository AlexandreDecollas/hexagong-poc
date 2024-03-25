import {TestBed} from '@angular/core/testing';

import {ACCOUNT_BOOK, AccountBookService} from './account-book.service';

describe('AccountBookService', () => {
    let service: AccountBookService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ACCOUNT_BOOK,
                    useValue: {}
                }
            ]
        });
        service = TestBed.inject(ACCOUNT_BOOK);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
