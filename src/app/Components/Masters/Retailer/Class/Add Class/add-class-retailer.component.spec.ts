import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassRetailerComponent } from './add-class-retailer.component';

describe('AddClassRetailerComponent', () => {
  let component: AddClassRetailerComponent;
  let fixture: ComponentFixture<AddClassRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClassRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
