import { TestBed } from '@angular/core/testing';

import { BookingBrowserService } from './booking-browser.service';

describe('BookingBrowserService', () => {
  let service: BookingBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
