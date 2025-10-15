import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStatusComponent } from './availability-status.component';

describe('AvailabilityStatusComponent', () => {
  let component: AvailabilityStatusComponent;
  let fixture: ComponentFixture<AvailabilityStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
