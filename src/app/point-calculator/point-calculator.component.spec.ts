import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCalculatorComponent } from './point-calculator.component';

describe('PointCalculatorComponent', () => {
  let component: PointCalculatorComponent;
  let fixture: ComponentFixture<PointCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
