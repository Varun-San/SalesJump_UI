import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeadQuartersComponent } from './add-head-quarters.component';

describe('AddHeadQuartersComponent', () => {
  let component: AddHeadQuartersComponent;
  let fixture: ComponentFixture<AddHeadQuartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHeadQuartersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHeadQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
