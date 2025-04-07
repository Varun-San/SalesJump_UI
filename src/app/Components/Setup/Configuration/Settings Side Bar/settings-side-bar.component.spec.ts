import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSideBarComponent } from './settings-side-bar.component';

describe('SettingsSideBarComponent', () => {
  let component: SettingsSideBarComponent;
  let fixture: ComponentFixture<SettingsSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
