import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUploadComponent } from './master-upload.component';

describe('MasterUploadComponent', () => {
  let component: MasterUploadComponent;
  let fixture: ComponentFixture<MasterUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
