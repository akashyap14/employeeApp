import { TestBed } from '@angular/core/testing';

import { EmployeeCanactivateGuardService } from './employee-canactivate-guard.service';

describe('EmployeeCanactivateGuardService', () => {
  let service: EmployeeCanactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCanactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
