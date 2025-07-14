import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { MastersComponent } from '../masters.component';
import { ReatilerComponent } from './reatiler.component';
import { RetailerCategoryComponent } from './Retailer Category/retailer-category.component';
import { AddCategoryRetailerComponent } from './Retailer Category/Add Category/add-category-retailer.component';
import { ClassComponent } from './Class/class.component';
import { AddClassRetailerComponent } from './Class/Add Class/add-class-retailer.component';
import { OutletTypeComponent } from './Outlet Type/outlet-type.component';
import { AddOutletTypeComponent } from './Outlet Type/Add Outlet Type/add-outlet-type.component';
import { RetailerCreationComponent } from './Retailer Creation/retailer-creation.component';
import { AddCreationRetailerComponent } from './Retailer Creation/Add Retailer Creation/add-creation-retailer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RetailerRoutingModule,
    MastersComponent,
    ReatilerComponent,
    RetailerCategoryComponent,
    AddCategoryRetailerComponent,
    ClassComponent,
    AddClassRetailerComponent,
    OutletTypeComponent,
    AddOutletTypeComponent,
    RetailerCreationComponent,
    AddCreationRetailerComponent,
  ],
})
export class RetailerModule {}
