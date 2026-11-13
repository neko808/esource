import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleracionDigitalComponent } from './acceleracion-digital.component';

describe('AcceleracionDigitalComponent', () => {
  let component: AcceleracionDigitalComponent;
  let fixture: ComponentFixture<AcceleracionDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceleracionDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleracionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
