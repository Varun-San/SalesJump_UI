import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWiseSettingsComponent } from './user-wise-settings.component';

describe('UserWiseSettingsComponent', () => {
  let component: UserWiseSettingsComponent;
  let fixture: ComponentFixture<UserWiseSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWiseSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWiseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
