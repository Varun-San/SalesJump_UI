import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorUploadComponent } from './distributor-upload.component';

describe('DistributorUploadComponent', () => {
  let component: DistributorUploadComponent;
  let fixture: ComponentFixture<DistributorUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributorUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
