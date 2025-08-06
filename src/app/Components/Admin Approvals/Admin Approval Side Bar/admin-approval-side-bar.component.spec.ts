import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovalSideBarComponent } from './admin-approval-side-bar.component';

describe('AdminApprovalSideBarComponent', () => {
  let component: AdminApprovalSideBarComponent;
  let fixture: ComponentFixture<AdminApprovalSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApprovalSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApprovalSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
