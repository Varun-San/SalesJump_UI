import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldoneComponent } from './alldone.component';

describe('AlldoneComponent', () => {
  let component: AlldoneComponent;
  let fixture: ComponentFixture<AlldoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlldoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
