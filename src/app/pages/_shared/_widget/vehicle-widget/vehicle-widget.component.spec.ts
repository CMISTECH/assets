import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleWidgetComponent } from './vehicle-widget.component';

describe('VehicleWidgetComponent', () => {
  let component: VehicleWidgetComponent;
  let fixture: ComponentFixture<VehicleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
