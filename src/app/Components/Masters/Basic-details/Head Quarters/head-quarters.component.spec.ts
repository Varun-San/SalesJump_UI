import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadQuartersComponent } from './head-quarters.component';

describe('HeadQuartersComponent', () => {
  let component: HeadQuartersComponent;
  let fixture: ComponentFixture<HeadQuartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadQuartersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
