import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { BasicDetailsComponent } from './basic-details.component';
import { CompanyComponent } from './Company/company.component';
import { AddCompanyComponent } from './Add Company/add-company.component';
import { CurrencyComponent } from './Currency/currency.component';
import { AddCurrencyComponent } from './Add Currency/add-currency.component';
import { DivisionComponent } from './Division/division.component';
import { AddDivisionComponent } from './Add Division/add-division.component';
import { DesignationComponent } from './Designation/designation.component';
import { AddDesignationComponent } from './Add Designation/add-designation.component';
import { MenuRightsComponent } from './Designation/Menu Rights/menu-rights.component';
import { HeadQuartersComponent } from './Head Quarters/head-quarters.component';
import { WorkTypeComponent } from './Work Type/work-type.component';
import { AddWorkTypeComponent } from './Add Work Type/add-work-type.component';
import { HoUserComponent } from './HO Users/ho-user.component';
import { AddHeadQuartersComponent } from './Add Head Quarters/add-head-quarters.component';
import { AddHoUserComponent } from './Add Ho User/add-ho-user.component';

const routes: Routes = [
  {
    path: '',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicDetailsRoutingModule {}
