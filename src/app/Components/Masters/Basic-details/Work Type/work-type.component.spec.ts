import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeComponent } from './work-type.component';

describe('WorkTypeComponent', () => {
  let component: WorkTypeComponent;
  let fixture: ComponentFixture<WorkTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
