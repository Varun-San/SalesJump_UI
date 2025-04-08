import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoUserComponent } from './ho-user.component';

describe('HoUserComponent', () => {
  let component: HoUserComponent;
  let fixture: ComponentFixture<HoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
