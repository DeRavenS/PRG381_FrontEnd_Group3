import { TestBed } from '@angular/core/testing';

import { StudentManagementService } from './student-browser.service';

describe('BookingBrowserService', () => {
  let service: StudentManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
