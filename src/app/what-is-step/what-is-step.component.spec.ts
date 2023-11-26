import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsStepComponent } from './what-is-step.component';

describe('WhatIsStepComponent', () => {
  let component: WhatIsStepComponent;
  let fixture: ComponentFixture<WhatIsStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIsStepComponent]
    });
    fixture = TestBed.createComponent(WhatIsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
