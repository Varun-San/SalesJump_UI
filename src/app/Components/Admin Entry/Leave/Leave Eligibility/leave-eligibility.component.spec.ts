import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEligibilityComponent } from './leave-eligibility.component';

describe('LeaveEligibilityComponent', () => {
  let component: LeaveEligibilityComponent;
  let fixture: ComponentFixture<LeaveEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveEligibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
