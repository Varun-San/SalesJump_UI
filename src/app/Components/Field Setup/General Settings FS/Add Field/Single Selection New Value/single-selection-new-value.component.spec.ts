import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionNewValueComponent } from './single-selection-new-value.component';

describe('SingleSelectionNewValueComponent', () => {
  let component: SingleSelectionNewValueComponent;
  let fixture: ComponentFixture<SingleSelectionNewValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSelectionNewValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSelectionNewValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
