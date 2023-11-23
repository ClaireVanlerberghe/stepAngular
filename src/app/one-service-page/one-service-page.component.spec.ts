import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneServicePageComponent } from './one-service-page.component';

describe('OneServicePageComponent', () => {
  let component: OneServicePageComponent;
  let fixture: ComponentFixture<OneServicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneServicePageComponent]
    });
    fixture = TestBed.createComponent(OneServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
