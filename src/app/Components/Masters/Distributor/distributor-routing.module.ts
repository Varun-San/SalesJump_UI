import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { DistributorComponent } from './distributor.component';
import { DistributorMasterComponent } from './Distributor Master/distributor-master.component';
import { AddDistributorComponent } from './Distributor Master/Add Distributor/add-distributor.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'distributor',
        component: DistributorComponent,
        children: [
          {
            path: 'distributor-master',
            component: DistributorMasterComponent,
            children: [
              {
                path: 'add-distributor',
                component: AddDistributorComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributorRoutingModule {}
