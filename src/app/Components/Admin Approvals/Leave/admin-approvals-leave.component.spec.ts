import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovalsLeaveComponent } from './admin-approvals-leave.component';

describe('AdminApprovalsLeaveComponent', () => {
  let component: AdminApprovalsLeaveComponent;
  let fixture: ComponentFixture<AdminApprovalsLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApprovalsLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApprovalsLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
