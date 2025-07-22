import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRateUploadComponent } from './product-rate-upload.component';

describe('ProductRateUploadComponent', () => {
  let component: ProductRateUploadComponent;
  let fixture: ComponentFixture<ProductRateUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRateUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRateUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
