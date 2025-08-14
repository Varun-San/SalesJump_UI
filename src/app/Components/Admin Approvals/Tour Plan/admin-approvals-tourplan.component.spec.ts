import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovalsTourplanComponent } from './admin-approvals-tourplan.component';

describe('AdminApprovalsTourplanComponent', () => {
  let component: AdminApprovalsTourplanComponent;
  let fixture: ComponentFixture<AdminApprovalsTourplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApprovalsTourplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApprovalsTourplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
