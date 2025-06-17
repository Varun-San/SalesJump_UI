import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStockiestDetailsComponent } from './super-stockiest-details.component';

describe('SuperStockiestDetailsComponent', () => {
  let component: SuperStockiestDetailsComponent;
  let fixture: ComponentFixture<SuperStockiestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperStockiestDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperStockiestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
