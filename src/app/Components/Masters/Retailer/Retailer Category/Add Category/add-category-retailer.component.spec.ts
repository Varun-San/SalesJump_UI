import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryRetailerComponent } from './add-category-retailer.component';

describe('AddCategoryRetailerComponent', () => {
  let component: AddCategoryRetailerComponent;
  let fixture: ComponentFixture<AddCategoryRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCategoryRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
