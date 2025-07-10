import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { MastersComponent } from '../masters.component';
import { DistributorComponent } from './distributor.component';
import { DistributorMasterComponent } from './Distributor Master/distributor-master.component';
import { AddDistributorComponent } from './Distributor Master/Add Distributor/add-distributor.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DistributorRoutingModule,
    MastersComponent,
    DistributorComponent,
    DistributorMasterComponent,
    AddDistributorComponent,
  ],
})
export class DistributorModule {}
