import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletTypeComponent } from './outlet-type.component';

describe('OutletTypeComponent', () => {
  let component: OutletTypeComponent;
  let fixture: ComponentFixture<OutletTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
