import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MastersComponent,
    ProductComponent,
    ProductDetailsComponent,
    AddProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    BrandComponent,
    AddBrandComponent,
    UomComponent,
    AddUomComponent,
    TaxAllocationComponent,
    RateEntryComponent,
    PopMaterialComponent,
    AddMaterialComponent,
    RateCardComponent,
    FixedRateCardComponent,
    AddRateCardComponent,
    AssignProductComponent,
  ],
})
export class ProductModule {}
