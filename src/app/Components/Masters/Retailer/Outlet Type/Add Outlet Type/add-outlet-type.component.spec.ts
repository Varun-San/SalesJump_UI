import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutletTypeComponent } from './add-outlet-type.component';

describe('AddOutletTypeComponent', () => {
  let component: AddOutletTypeComponent;
  let fixture: ComponentFixture<AddOutletTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOutletTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOutletTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
