import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMaterialComponent } from './pop-material.component';

describe('PopMaterialComponent', () => {
  let component: PopMaterialComponent;
  let fixture: ComponentFixture<PopMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
