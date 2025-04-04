import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSideBarComponent } from './master-side-bar.component';

describe('MasterSideBarComponent', () => {
  let component: MasterSideBarComponent;
  let fixture: ComponentFixture<MasterSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
