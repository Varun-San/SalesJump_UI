import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerCategoryComponent } from './retailer-category.component';

describe('RetailerCategoryComponent', () => {
  let component: RetailerCategoryComponent;
  let fixture: ComponentFixture<RetailerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailerCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
