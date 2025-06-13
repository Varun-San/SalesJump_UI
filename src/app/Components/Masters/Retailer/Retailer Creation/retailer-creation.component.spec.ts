import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerCreationComponent } from './retailer-creation.component';

describe('RetailerCreationComponent', () => {
  let component: RetailerCreationComponent;
  let fixture: ComponentFixture<RetailerCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailerCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
