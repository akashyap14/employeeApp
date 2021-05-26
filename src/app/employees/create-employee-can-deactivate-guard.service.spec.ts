import { TestBed } from '@angular/core/testing';

import { CreateEmployeeCanDeactivateGuardService } from './create-employee-can-deactivate-guard.service';

describe('CreateEmployeeCanDeactivateGuardService', () => {
  let service: CreateEmployeeCanDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEmployeeCanDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
