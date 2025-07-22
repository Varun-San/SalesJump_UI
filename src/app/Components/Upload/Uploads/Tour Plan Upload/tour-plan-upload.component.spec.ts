import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlanUploadComponent } from './tour-plan-upload.component';

describe('TourPlanUploadComponent', () => {
  let component: TourPlanUploadComponent;
  let fixture: ComponentFixture<TourPlanUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPlanUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPlanUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
