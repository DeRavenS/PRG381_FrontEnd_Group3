import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveUserComponent } from './dialog-save-user.component';

describe('DialogSaveUserComponent', () => {
  let component: DialogSaveUserComponent;
  let fixture: ComponentFixture<DialogSaveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSaveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
