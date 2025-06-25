import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldForceComponent } from './field-force.component';

describe('FieldForceComponent', () => {
  let component: FieldForceComponent;
  let fixture: ComponentFixture<FieldForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldForceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
