import { TestBed } from '@angular/core/testing';

import { EmployeeResolveGuardService } from './employee-resolve-guard.service';

describe('EmployeeResolveGuardService', () => {
  let service: EmployeeResolveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeResolveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
