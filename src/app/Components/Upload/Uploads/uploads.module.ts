import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadComponent } from '../upload.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, UploadsRoutingModule, UploadComponent],
})
export class UploadsModule {}
