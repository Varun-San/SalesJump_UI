import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportsSidebarComponent } from './admin-reports-sidebar.component';

describe('AdminReportsSidebarComponent', () => {
  let component: AdminReportsSidebarComponent;
  let fixture: ComponentFixture<AdminReportsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportsSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
