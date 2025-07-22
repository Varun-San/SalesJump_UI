import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadComponent } from '../upload.component';
import { ProductUploadComponent } from './Product Upload/product-upload.component';
import { ProductRateUploadComponent } from './Product Rate Upload/product-rate-upload.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UploadsRoutingModule,
    UploadComponent,
    ProductUploadComponent,
    ProductRateUploadComponent,
  ],
})
export class UploadsModule {}
