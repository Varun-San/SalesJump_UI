import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadsComponent } from './uploads.component';
import { ProductUploadComponent } from './Product Upload/product-upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadsComponent,
    children: [
      {
        path: 'product-upload',
        component: ProductUploadComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadsRoutingModule {}
