import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionsComponent } from './add-competitions.component';

describe('AddCompetitionsComponent', () => {
  let component: AddCompetitionsComponent;
  let fixture: ComponentFixture<AddCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCompetitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
