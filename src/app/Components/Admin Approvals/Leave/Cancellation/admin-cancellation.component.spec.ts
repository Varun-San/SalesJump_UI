import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCancellationComponent } from './admin-cancellation.component';

describe('AdminCancellationComponent', () => {
  let component: AdminCancellationComponent;
  let fixture: ComponentFixture<AdminCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCancellationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
