import { TestBed } from '@angular/core/testing';

import { BookingbrowserMockService } from './bookingbrowser-mock.service';

describe('BookingbrowserMockService', () => {
  let service: BookingbrowserMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingbrowserMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
