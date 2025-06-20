import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedRateCardComponent } from './fixed-rate-card.component';

describe('FixedRateCardComponent', () => {
  let component: FixedRateCardComponent;
  let fixture: ComponentFixture<FixedRateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedRateCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedRateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
