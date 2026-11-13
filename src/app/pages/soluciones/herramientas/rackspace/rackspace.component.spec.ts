import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackspaceComponent } from './rackspace.component';

describe('RackspaceComponent', () => {
  let component: RackspaceComponent;
  let fixture: ComponentFixture<RackspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RackspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
