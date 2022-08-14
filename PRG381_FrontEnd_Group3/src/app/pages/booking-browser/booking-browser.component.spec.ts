import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBrowserComponent } from './booking-browser.component';

describe('BookingBrowserComponent', () => {
  let component: BookingBrowserComponent;
  let fixture: ComponentFixture<BookingBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
