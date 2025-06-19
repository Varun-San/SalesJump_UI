import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRouteListComponent } from './add-route-list.component';

describe('AddRouteListComponent', () => {
  let component: AddRouteListComponent;
  let fixture: ComponentFixture<AddRouteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRouteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
