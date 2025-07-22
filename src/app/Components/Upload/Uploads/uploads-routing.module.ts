import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadsComponent } from './uploads.component';
import { ProductUploadComponent } from './Product Upload/product-upload.component';
import { ProductRateUploadComponent } from './Product Rate Upload/product-rate-upload.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadsRoutingModule {}
