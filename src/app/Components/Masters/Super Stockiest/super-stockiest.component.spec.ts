import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStockiestComponent } from './super-stockiest.component';

describe('SuperStockiestComponent', () => {
  let component: SuperStockiestComponent;
  let fixture: ComponentFixture<SuperStockiestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperStockiestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperStockiestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
