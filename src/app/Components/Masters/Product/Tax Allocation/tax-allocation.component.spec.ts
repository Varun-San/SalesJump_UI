import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAllocationComponent } from './tax-allocation.component';

describe('TaxAllocationComponent', () => {
  let component: TaxAllocationComponent;
  let fixture: ComponentFixture<TaxAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxAllocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
