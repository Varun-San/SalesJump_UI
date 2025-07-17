import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMasterMainComponent } from './leave-master-main.component';

describe('LeaveMasterMainComponent', () => {
  let component: LeaveMasterMainComponent;
  let fixture: ComponentFixture<LeaveMasterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveMasterMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveMasterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
