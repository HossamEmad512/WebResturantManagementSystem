import { TestBed } from '@angular/core/testing';

import { AuthSalesService } from './auth-sales.service';

describe('AuthSalesService', () => {
  let service: AuthSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
