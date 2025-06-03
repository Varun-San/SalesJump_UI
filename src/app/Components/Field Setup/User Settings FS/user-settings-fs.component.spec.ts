import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsFsComponent } from './user-settings-fs.component';

describe('UserSettingsFsComponent', () => {
  let component: UserSettingsFsComponent;
  let fixture: ComponentFixture<UserSettingsFsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSettingsFsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingsFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
