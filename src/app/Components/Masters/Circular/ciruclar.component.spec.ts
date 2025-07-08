import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiruclarComponent } from './ciruclar.component';

describe('CiruclarComponent', () => {
  let component: CiruclarComponent;
  let fixture: ComponentFixture<CiruclarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiruclarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiruclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
