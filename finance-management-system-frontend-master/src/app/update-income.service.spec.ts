import { TestBed } from '@angular/core/testing';

import { UpdateIncomeService } from './update-income.service';

describe('UpdateIncomeService', () => {
  let service: UpdateIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
