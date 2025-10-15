import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportLeaveComponent } from './admin-report-leave.component';

describe('AdminReportLeaveComponent', () => {
  let component: AdminReportLeaveComponent;
  let fixture: ComponentFixture<AdminReportLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
