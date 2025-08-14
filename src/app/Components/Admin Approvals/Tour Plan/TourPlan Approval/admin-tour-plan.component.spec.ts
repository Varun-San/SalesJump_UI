import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTourPlanComponent } from './admin-tour-plan.component';

describe('AdminTourPlanComponent', () => {
  let component: AdminTourPlanComponent;
  let fixture: ComponentFixture<AdminTourPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTourPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
