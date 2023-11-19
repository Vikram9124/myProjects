import { TestBed } from '@angular/core/testing';

import { SavingServiceService } from './saving-service.service';

describe('SavingServiceService', () => {
  let service: SavingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
