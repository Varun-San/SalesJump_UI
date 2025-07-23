import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadsComponent } from './uploads.component';
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

const routes: Routes = [
  {
    path: '',
    component: UploadsComponent,
    children: [
      {
        path: 'product-upload',
        component: ProductUploadComponent,
      },
      {
        path: 'product-rate-upload',
        component: ProductRateUploadComponent,
      },
      {
        path: 'distributor-upload',
        component: DistributorUploadComponent,
      },
      {
        path: 'route-upload',
        component: RouteUploadComponent,
      },
      {
        path: 'retailer-upload',
        component: RetailerUploadComponent,
      },
      {
        path: 'target-upload',
        component: TargetUploadComponent,
      },
      {
        path: 'primary-target-upload',
        component: PrimaryTargetUploadComponent,
      },
      {
        path: 'pending-bills-upload',
        component: PendingBillsUploadComponent,
      },
      {
        path: 'master-upload',
        component: MasterUploadComponent,
      },
      {
        path: 'bulk-user-upload',
        component: BulkUserUploadComponent,
      },
      {
        path: 'tour-plan-upload',
        component: TourPlanUploadComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadsRoutingModule {}
