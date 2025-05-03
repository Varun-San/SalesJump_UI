import { Routes } from '@angular/router';
import { SampleComponent } from './Components/Login Pages/sample/sample.component';
import { ForgotPasswordComponent } from './Components/Login Pages/forgot-password/forgot-password.component';
import { VerificationComponent } from './Components/Login Pages/verification/verification.component';
import { NewPasswordComponent } from './Components/Login Pages/new-password/new-password.component';
import { AlldoneComponent } from './Components/Login Pages/alldone/alldone.component';
import { ConfigurationComponent } from './Components/Setup/Configuration/configuration.component';
import { UserWiseSettingsComponent } from './Components/Setup/Configuration/User Wise Settings/user-wise-settings.component';
import { GeneralSettingsComponent } from './Components/Setup/Configuration/General Settings/general-settings.component';
import { LayoutComponent } from './Components/Layout/layout.component';
import { MastersComponent } from './Components/Masters/masters.component';
import { BasicDetailsComponent } from './Components/Masters/Basic-details/basic-details.component';
import { Component } from '@angular/core';
import { CompanyComponent } from './Components/Masters/Basic-details/Company/company.component';
import { DivisionComponent } from './Components/Masters/Basic-details/Division/division.component';
import { DesignationComponent } from './Components/Masters/Basic-details/Designation/designation.component';
import { HeadQuartersComponent } from './Components/Masters/Basic-details/Head Quarters/head-quarters.component';
import { WorkTypeComponent } from './Components/Masters/Basic-details/Work Type/work-type.component';
import { HoUserComponent } from './Components/Masters/Basic-details/HO Users/ho-user.component';
import { AddDivisionComponent } from './Components/Masters/Basic-details/Add Division/add-division.component';
import { AddDesignationComponent } from './Components/Masters/Basic-details/Add Designation/add-designation.component';
import { MenuRightsComponent } from './Components/Masters/Basic-details/Designation/Menu Rights/menu-rights.component';
import { AddHeadQuartersComponent } from './Components/Masters/Basic-details/Add Head Quarters/add-head-quarters.component';
import { AddHoUserComponent } from './Components/Masters/Basic-details/Add Ho User/add-ho-user.component';
import { CurrencyComponent } from './Components/Masters/Basic-details/Currency/currency.component';
import { GeographyComponent } from './Components/Masters/Geography/geography.component';
import { AreaComponent } from './Components/Masters/Geography/Area/area.component';
import { ZoneComponent } from './Components/Masters/Geography/Zone/zone.component';
import { TerritoryComponent } from './Components/Masters/Geography/Territory/territory.component';
import { DistrictComponent } from './Components/Masters/Geography/District/district.component';
import { TownComponent } from './Components/Masters/Geography/Town/town.component';
import { AddWorkTypeComponent } from './Components/Masters/Basic-details/Add Work Type/add-work-type.component';
import { AddCurrencyComponent } from './Components/Masters/Basic-details/Add Currency/add-currency.component';
import { ProductComponent } from './Components/Masters/Product/product.component';
import { ProductDetailsComponent } from './Components/Masters/Product/Product Details/product-details.component';
import { CategoryComponent } from './Components/Masters/Product/Category/category.component';
import { BrandComponent } from './Components/Masters/Product/Brand/brand.component';
import { UomComponent } from './Components/Masters/Product/Uom/uom.component';
import { TaxAllocationComponent } from './Components/Masters/Product/Tax Allocation/tax-allocation.component';
import { RateEntryComponent } from './Components/Masters/Product/Rate Entry/rate-entry.component';
import { PopMaterialComponent } from './Components/Masters/Product/Pop Material/pop-material.component';
import { RateCardComponent } from './Components/Masters/Product/Rate Card/rate-card.component';
import { AddProductComponent } from './Components/Masters/Product/Add Product/add-product.component';

export const routes: Routes = [
  {
    // Default route
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Ensure that the redirect is only happening at the root
  },
  {
    // Home-Page
    path: 'home',
    component: SampleComponent,
  },
  {
    // Forgot-Password
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    // Verification
    path: 'verification',
    component: VerificationComponent,
  },
  {
    // New-Password
    path: 'newpassword',
    component: NewPasswordComponent,
  },
  {
    // All-Done
    path: 'password_alldone',
    component: AlldoneComponent,
  },
  {
    // Routes for the layout section (without "layout" prefix)
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'configuration',
        component: ConfigurationComponent,
        children: [
          {
            path: 'general-settings',
            component: GeneralSettingsComponent,
          },
          {
            path: 'user-settings',
            component: UserWiseSettingsComponent,
          },
        ],
      },
      {
        path: 'master',
        component: MastersComponent,
        children: [
          {
            path: 'basic_details',
            component: BasicDetailsComponent,
            children: [
              {
                path: 'company',
                component: CompanyComponent,
              },
              {
                path: 'currency',
                component: CurrencyComponent,
                children: [
                  {
                    path: 'add-currency',
                    component: AddCurrencyComponent,
                  },
                ],
              },
              {
                path: 'division',
                component: DivisionComponent,
              },
              {
                path: 'designation',
                component: DesignationComponent,
                children: [
                  {
                    path: 'menu-rights',
                    component: MenuRightsComponent,
                  },
                ],
              },
              {
                path: 'head-quarters',
                component: HeadQuartersComponent,
              },
              {
                path: 'work-type',
                component: WorkTypeComponent,
              },
              {
                path: 'ho-user',
                component: HoUserComponent,
              },
              {
                path: 'add-division',
                component: AddDivisionComponent,
              },
              {
                path: 'add-designation',
                component: AddDesignationComponent,
              },
              {
                path: 'add-headquarters',
                component: AddHeadQuartersComponent,
              },
              {
                path: 'add-ho-user',
                component: AddHoUserComponent,
              },
              {
                path: 'add-work-type',
                component: AddWorkTypeComponent,
              },
            ],
          },
          {
            path: 'geography',
            component: GeographyComponent,
            children: [
              {
                path: 'area',
                component: AreaComponent,
              },
              {
                path: 'zone',
                component: ZoneComponent,
              },
              {
                path: 'territory',
                component: TerritoryComponent,
              },
              {
                path: 'district',
                component: DistrictComponent,
              },
              {
                path: 'town',
                component: TownComponent,
              },
            ],
          },
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
              },
              {
                path: 'brand',
                component: BrandComponent,
              },
              {
                path: 'uom',
                component: UomComponent,
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
              },
              {
                path: 'rate-card',
                component: RateCardComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];
