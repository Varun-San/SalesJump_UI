import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTargetUploadComponent } from './primary-target-upload.component';

describe('PrimaryTargetUploadComponent', () => {
  let component: PrimaryTargetUploadComponent;
  let fixture: ComponentFixture<PrimaryTargetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryTargetUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryTargetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
