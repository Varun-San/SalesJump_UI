import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetUploadComponent } from './target-upload.component';

describe('TargetUploadComponent', () => {
  let component: TargetUploadComponent;
  let fixture: ComponentFixture<TargetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
