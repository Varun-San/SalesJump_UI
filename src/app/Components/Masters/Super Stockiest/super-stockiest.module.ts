import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperStockiestRoutingModule } from './super-stockiest-routing.module';
import { MastersComponent } from '../masters.component';
import { SuperStockiestComponent } from './super-stockiest.component';
import { AddSuperSockiestDetailsComponent } from './Super Stockiest Details/Add Super Sockiest Details/add-super-sockiest-details.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuperStockiestRoutingModule,
    MastersComponent,
    SuperStockiestComponent,
    AddSuperSockiestDetailsComponent,
  ],
})
export class SuperStockiestModule {}
