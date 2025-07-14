import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './Product Details/product-details.component';
import { AddProductComponent } from './Add Product/add-product.component';
import { CategoryComponent } from './Category/category.component';
import { AddCategoryComponent } from './Add Category/add-category.component';
import { BrandComponent } from './Brand/brand.component';
import { AddBrandComponent } from './Add Brand/add-brand.component';
import { UomComponent } from './Uom/uom.component';
import { AddUomComponent } from './Add Uom/add-uom.component';
import { TaxAllocationComponent } from './Tax Allocation/tax-allocation.component';
import { RateEntryComponent } from './Rate Entry/rate-entry.component';
import { PopMaterialComponent } from './Pop Material/pop-material.component';
import { AddMaterialComponent } from './Add Material/add-material.component';
import { RateCardComponent } from './Rate Card/rate-card.component';
import { FixedRateCardComponent } from './Fixed Rate Card/fixed-rate-card.component';
import { AddRateCardComponent } from './Add Rate Card/add-rate-card.component';
import { AssignProductComponent } from './Assign Product/assign-product.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {
            path: 'product-details',
            component: ProductDetailsComponent,
            children: [
              {
                path: 'add-product',
                component: AddProductComponent,
              },
            ],
          },
          {
            path: 'category',
            component: CategoryComponent,
            children: [
              {
                path: 'add-category',
                component: AddCategoryComponent,
              },
            ],
          },
          {
            path: 'brand',
            component: BrandComponent,
            children: [
              {
                path: 'add-brand',
                component: AddBrandComponent,
              },
            ],
          },
          {
            path: 'uom',
            component: UomComponent,
            children: [
              {
                path: 'add-uom',
                component: AddUomComponent,
              },
            ],
          },
          {
            path: 'tax-allocation',
            component: TaxAllocationComponent,
          },
          {
            path: 'rate-entry',
            component: RateEntryComponent,
          },
          {
            path: 'pop-material',
            component: PopMaterialComponent,
            children: [
              {
                path: 'add-material',
                component: AddMaterialComponent,
              },
            ],
          },
          {
            path: 'rate-card',
            component: RateCardComponent,
          },
          {
            path: 'fixed-rate-card',
            component: FixedRateCardComponent,
            children: [
              {
                path: 'add-rate-card',
                component: AddRateCardComponent,
              },
              {
                path: 'assign-product',
                component: AssignProductComponent,
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
export class ProductRoutingModule {}
