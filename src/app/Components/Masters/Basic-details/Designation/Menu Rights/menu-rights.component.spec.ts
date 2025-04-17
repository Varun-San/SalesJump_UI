import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRightsComponent } from './menu-rights.component';

describe('MenuRightsComponent', () => {
  let component: MenuRightsComponent;
  let fixture: ComponentFixture<MenuRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
