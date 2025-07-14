import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'retailer',
        component: ReatilerComponent,
        children: [
          {
            path: 'retailer-category',
            component: RetailerCategoryComponent,
            children: [
              {
                path: 'add-category-retailer',
                component: AddCategoryRetailerComponent,
              },
            ],
          },
          {
            path: 'retailer-class',
            component: ClassComponent,
            children: [
              {
                path: 'add-class-retailer',
                component: AddClassRetailerComponent,
              },
            ],
          },
          {
            path: 'retailer-outlet-type',
            component: OutletTypeComponent,
            children: [
              {
                path: 'add-routlet-type',
                component: AddOutletTypeComponent,
              },
            ],
          },
          {
            path: 'retailer-creation',
            component: RetailerCreationComponent,
            children: [
              {
                path: 'add-creation-retailer',
                component: AddCreationRetailerComponent,
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
export class RetailerRoutingModule {}
