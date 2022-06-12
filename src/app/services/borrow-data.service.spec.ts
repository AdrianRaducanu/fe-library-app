import { TestBed } from '@angular/core/testing';

import { BorrowDataService } from './borrow-data.service';

describe('BorrowDataService', () => {
  let service: BorrowDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
