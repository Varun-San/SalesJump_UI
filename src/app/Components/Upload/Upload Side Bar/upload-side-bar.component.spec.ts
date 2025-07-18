import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSideBarComponent } from './upload-side-bar.component';

describe('UploadSideBarComponent', () => {
  let component: UploadSideBarComponent;
  let fixture: ComponentFixture<UploadSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
