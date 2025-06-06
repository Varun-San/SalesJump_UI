import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSetupComponent } from './field-setup.component';

describe('FieldSetupComponent', () => {
  let component: FieldSetupComponent;
  let fixture: ComponentFixture<FieldSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
