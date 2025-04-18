import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClickComponent } from './map-click.component';

describe('MapClickComponent', () => {
  let component: MapClickComponent;
  let fixture: ComponentFixture<MapClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
