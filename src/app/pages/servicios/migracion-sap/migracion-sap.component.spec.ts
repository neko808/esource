import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigracionSapComponent } from './migracion-sap.component';

describe('MigracionSapComponent', () => {
  let component: MigracionSapComponent;
  let fixture: ComponentFixture<MigracionSapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigracionSapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigracionSapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
