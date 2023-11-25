import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCardsComponent } from './first-cards.component';

describe('FirstCardsComponent', () => {
  let component: FirstCardsComponent;
  let fixture: ComponentFixture<FirstCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCardsComponent]
    });
    fixture = TestBed.createComponent(FirstCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
