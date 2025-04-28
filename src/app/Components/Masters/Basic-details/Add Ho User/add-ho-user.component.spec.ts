import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHoUserComponent } from './add-ho-user.component';

describe('AddHoUserComponent', () => {
  let component: AddHoUserComponent;
  let fixture: ComponentFixture<AddHoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHoUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
