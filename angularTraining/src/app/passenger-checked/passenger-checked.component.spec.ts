import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCheckedComponent } from './passenger-checked.component';

describe('PassengerCheckedComponent', () => {
  let component: PassengerCheckedComponent;
  let fixture: ComponentFixture<PassengerCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerCheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
