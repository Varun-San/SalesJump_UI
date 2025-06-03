import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSetupSideBarComponent } from './field-setup-side-bar.component';

describe('FieldSetupSideBarComponent', () => {
  let component: FieldSetupSideBarComponent;
  let fixture: ComponentFixture<FieldSetupSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldSetupSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSetupSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
