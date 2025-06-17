import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreationRetailerComponent } from './add-creation-retailer.component';

describe('AddCreationRetailerComponent', () => {
  let component: AddCreationRetailerComponent;
  let fixture: ComponentFixture<AddCreationRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCreationRetailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCreationRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
