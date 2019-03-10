import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizerComponent } from './quizer.component';

describe('QuizerComponent', () => {
  let component: QuizerComponent;
  let fixture: ComponentFixture<QuizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
