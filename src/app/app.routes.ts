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
import { AddCategoryComponent } from './Components/Masters/Product/Add Category/add-category.component';
import { AddBrandComponent } from './Components/Masters/Product/Add Brand/add-brand.component';
import { AddUomComponent } from './Components/Masters/Product/Add Uom/add-uom.component';
import { AddCompanyComponent } from './Components/Masters/Basic-details/Add Company/add-company.component';
import { AddAreaComponent } from './Components/Masters/Geography/Add Area/add-area.component';
import { AddZoneComponent } from './Components/Masters/Geography/Add Zone/add-zone.component';
import { AddTerritoryComponent } from './Components/Masters/Geography/Add Territory/add-territory.component';
import { AddDistrictComponent } from './Components/Masters/Geography/Add District/add-district.component';
import { AddTownComponent } from './Components/Masters/Geography/Add Town/add-town.component';
import { AddMaterialComponent } from './Components/Masters/Product/Add Material/add-material.component';
import { AddRateCardComponent } from './Components/Masters/Product/Add Rate Card/add-rate-card.component';
import { AssignProductComponent } from './Components/Masters/Product/Assign Product/assign-product.component';
import { GamificationComponent } from './Components/Masters/Gamification/gamification.component';
import { CompetitionsComponent } from './Components/Masters/Gamification/Competitions/competitions.component';
import { FormulaComponent } from './Components/Masters/Gamification/Formula/formula.component';
import { RewardsComponent } from './Components/Masters/Gamification/Rewards/rewards.component';
import { LevelsComponent } from './Components/Masters/Gamification/Levels/levels.component';
import { AddCompetitionsComponent } from './Components/Masters/Gamification/Competitions/Add Competitions/add-competitions.component';
import { PlayerSelectionComponent } from './Components/Masters/Gamification/Competitions/Add Competitions/Player Selection/player-selection.component';
import { TeamHeadComponent } from './Components/Masters/Gamification/Competitions/Add Competitions/Team Head/team-head.component';
import { authGuard } from './Guard/auth.guard';
import { FieldSetupComponent } from './Components/Field Setup/field-setup.component';
import { GeneralSettingsFsComponent } from './Components/Field Setup/General Settings FS/general-settings-fs.component';
import { UserSettingsFsComponent } from './Components/Field Setup/User Settings FS/user-settings-fs.component';
import { AddFieldComponent } from './Components/Field Setup/General Settings FS/Add Field/add-field.component';
import { SingleSelectionNewValueComponent } from './Components/Field Setup/General Settings FS/Add Field/Single Selection New Value/single-selection-new-value.component';
import { ReatilerComponent } from './Components/Masters/Retailer/reatiler.component';
import { ClassComponent } from './Components/Masters/Retailer/Class/class.component';
import { OutletTypeComponent } from './Components/Masters/Retailer/Outlet Type/outlet-type.component';
import { RetailerCreationComponent } from './Components/Masters/Retailer/Retailer Creation/retailer-creation.component';
import { RetailerCategoryComponent } from './Components/Masters/Retailer/Retailer Category/retailer-category.component';
import { AddOutletTypeComponent } from './Components/Masters/Retailer/Outlet Type/Add Outlet Type/add-outlet-type.component';
import { AddClassRetailerComponent } from './Components/Masters/Retailer/Class/Add Class/add-class-retailer.component';
import { AddCategoryRetailerComponent } from './Components/Masters/Retailer/Retailer Category/Add Category/add-category-retailer.component';
import { AddCreationRetailerComponent } from './Components/Masters/Retailer/Retailer Creation/Add Retailer Creation/add-creation-retailer.component';
import { SuperStockiestComponent } from './Components/Masters/Super Stockiest/super-stockiest.component';
import { SuperStockiestDetailsComponent } from './Components/Masters/Super Stockiest/Super Stockiest Details/super-stockiest-details.component';
import { AddSuperSockiestDetailsComponent } from './Components/Masters/Super Stockiest/Super Stockiest Details/Add Super Sockiest Details/add-super-sockiest-details.component';

export const routes: Routes = [
  {
    // Default route
    path: '',
    redirectTo: 'login',
    pathMatch: 'full', // Ensure that the redirect is only happening at the root
  },
  {
    // login-Page
    path: 'login',
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
    canActivate: [authGuard],
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
                children: [
                  {
                    path: 'add-company',
                    component: AddCompanyComponent,
                  },
                ],
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
                children: [
                  {
                    path: 'add-division',
                    component: AddDivisionComponent,
                  },
                ],
              },
              {
                path: 'designation',
                component: DesignationComponent,
                children: [
                  {
                    path: 'add-designation',
                    component: AddDesignationComponent,
                  },
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
                children: [
                  {
                    path: 'add-work-type',
                    component: AddWorkTypeComponent,
                  },
                ],
              },
              {
                path: 'ho-user',
                component: HoUserComponent,
              },
              {
                path: 'add-headquarters',
                component: AddHeadQuartersComponent,
              },
              {
                path: 'add-ho-user',
                component: AddHoUserComponent,
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
                children: [
                  {
                    path: 'add-area',
                    component: AddAreaComponent,
                  },
                ],
              },
              {
                path: 'zone',
                component: ZoneComponent,
                children: [
                  {
                    path: 'add-zone',
                    component: AddZoneComponent,
                  },
                ],
              },
              {
                path: 'territory',
                component: TerritoryComponent,
                children: [
                  {
                    path: 'add-territory',
                    component: AddTerritoryComponent,
                  },
                ],
              },
              {
                path: 'district',
                component: DistrictComponent,
                children: [
                  {
                    path: 'add-district',
                    component: AddDistrictComponent,
                  },
                ],
              },
              {
                path: 'town',
                component: TownComponent,
                children: [
                  {
                    path: 'add-town',
                    component: AddTownComponent,
                  },
                ],
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
          {
            path: 'super-stockiest',
            component: SuperStockiestComponent,
            children: [
              {
                path: 'super-stockiest-details',
                component: SuperStockiestDetailsComponent,
                children: [
                  {
                    path: 'add-super-sockiest',
                    component: AddSuperSockiestDetailsComponent,
                  },
                ],
              },
            ],
          },
          {
            path: 'gamification',
            component: GamificationComponent,
            children: [
              {
                path: 'competitions',
                component: CompetitionsComponent,
                children: [
                  {
                    path: 'add-competitions',
                    component: AddCompetitionsComponent,
                    children: [
                      {
                        path: 'player-selection',
                        component: PlayerSelectionComponent,
                      },
                      {
                        path: 'team-head',
                        component: TeamHeadComponent,
                      },
                    ],
                  },
                ],
              },
              {
                path: 'formula',
                component: FormulaComponent,
              },
              {
                path: 'rewards',
                component: RewardsComponent,
              },
              {
                path: 'levels',
                component: LevelsComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'field-setup',
        component: FieldSetupComponent,
        children: [
          {
            path: 'fs-general-settings',
            component: GeneralSettingsFsComponent,
            children: [
              {
                path: 'add-field',
                component: AddFieldComponent,
                children: [
                  {
                    path: 'new-single-selection-value',
                    component: SingleSelectionNewValueComponent,
                  },
                ],
              },
            ],
          },
          {
            path: 'fs-user-settings',
            component: UserSettingsFsComponent,
          },
        ],
      },
    ],
  },
];
