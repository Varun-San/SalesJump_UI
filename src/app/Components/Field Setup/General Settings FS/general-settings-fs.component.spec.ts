import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingsFsComponent } from './general-settings-fs.component';

describe('GeneralSettingsFsComponent', () => {
  let component: GeneralSettingsFsComponent;
  let fixture: ComponentFixture<GeneralSettingsFsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralSettingsFsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSettingsFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
