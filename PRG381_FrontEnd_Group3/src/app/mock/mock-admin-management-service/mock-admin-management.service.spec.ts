import { TestBed } from '@angular/core/testing';

import { MockAdminManagementService } from './mock-admin-management.service';

describe('MockAdminManagementService', () => {
  let service: MockAdminManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAdminManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
