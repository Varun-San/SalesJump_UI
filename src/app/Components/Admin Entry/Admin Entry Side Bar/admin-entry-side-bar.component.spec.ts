import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntrySideBarComponent } from './admin-entry-side-bar.component';

describe('AdminEntrySideBarComponent', () => {
  let component: AdminEntrySideBarComponent;
  let fixture: ComponentFixture<AdminEntrySideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEntrySideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEntrySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
