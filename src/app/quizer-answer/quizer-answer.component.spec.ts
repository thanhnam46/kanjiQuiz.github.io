import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizerAnswerComponent } from './quizer-answer.component';

describe('QuizerAnswerComponent', () => {
  let component: QuizerAnswerComponent;
  let fixture: ComponentFixture<QuizerAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizerAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizerAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
