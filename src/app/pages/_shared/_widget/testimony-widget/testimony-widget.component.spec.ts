import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyWidgetComponent } from './testimony-widget.component';

describe('TestimonyWidgetComponent', () => {
  let component: TestimonyWidgetComponent;
  let fixture: ComponentFixture<TestimonyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
