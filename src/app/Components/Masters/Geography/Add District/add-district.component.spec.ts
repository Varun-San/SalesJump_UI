import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistrictComponent } from './add-district.component';

describe('AddDistrictComponent', () => {
  let component: AddDistrictComponent;
  let fixture: ComponentFixture<AddDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
