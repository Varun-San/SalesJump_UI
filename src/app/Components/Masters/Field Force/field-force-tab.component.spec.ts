import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldForceTabComponent } from './field-force-tab.component';

describe('FieldForceTabComponent', () => {
  let component: FieldForceTabComponent;
  let fixture: ComponentFixture<FieldForceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldForceTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldForceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
