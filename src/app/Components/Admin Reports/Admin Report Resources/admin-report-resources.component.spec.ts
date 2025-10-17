import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportResourcesComponent } from './admin-report-resources.component';

describe('AdminReportResourcesComponent', () => {
  let component: AdminReportResourcesComponent;
  let fixture: ComponentFixture<AdminReportResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
