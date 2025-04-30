import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateEntryComponent } from './rate-entry.component';

describe('RateEntryComponent', () => {
  let component: RateEntryComponent;
  let fixture: ComponentFixture<RateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
