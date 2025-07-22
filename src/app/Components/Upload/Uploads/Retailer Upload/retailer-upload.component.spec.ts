import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerUploadComponent } from './retailer-upload.component';

describe('RetailerUploadComponent', () => {
  let component: RetailerUploadComponent;
  let fixture: ComponentFixture<RetailerUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailerUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
