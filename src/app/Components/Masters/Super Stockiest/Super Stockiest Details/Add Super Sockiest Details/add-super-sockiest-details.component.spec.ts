import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperSockiestDetailsComponent } from './add-super-sockiest-details.component';

describe('AddSuperSockiestDetailsComponent', () => {
  let component: AddSuperSockiestDetailsComponent;
  let fixture: ComponentFixture<AddSuperSockiestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuperSockiestDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuperSockiestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
