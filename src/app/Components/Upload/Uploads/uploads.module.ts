import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadComponent } from '../upload.component';
import { ProductUploadComponent } from './Product Upload/product-upload.component';
import { ProductRateUploadComponent } from './Product Rate Upload/product-rate-upload.component';
import { DistributorUploadComponent } from './Distributor Upload/distributor-upload.component';

import { RetailerUploadComponent } from './Retailer Upload/retailer-upload.component';
import { TargetUploadComponent } from './Target Upload/target-upload.component';
import { PrimaryTargetUploadComponent } from './Primary Target Upload/primary-target-upload.component';
import { PendingBillsUploadComponent } from './Pending Bills Upload/pending-bills-upload.component';
import { MasterUploadComponent } from './Master Upload/master-upload.component';
import { BulkUserUploadComponent } from './Bulk User Upload/bulk-user-upload.component';
import { TourPlanUploadComponent } from './Tour Plan Upload/tour-plan-upload.component';
import { RouteUploadComponent } from './Route Upload/route-upload.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UploadsRoutingModule,
    UploadComponent,
    ProductUploadComponent,
    ProductRateUploadComponent,
    DistributorUploadComponent,
    RetailerUploadComponent,
    TargetUploadComponent,
    PrimaryTargetUploadComponent,
    PendingBillsUploadComponent,
    MasterUploadComponent,
    BulkUserUploadComponent,
    TourPlanUploadComponent,
    RouteUploadComponent,
  ],
})
export class UploadsModule {}
