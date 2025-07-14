import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicDetailsRoutingModule } from './basic-details-routing.module';
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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicDetailsRoutingModule,
    MastersComponent,
    BasicDetailsComponent,
    CompanyComponent,
    AddCompanyComponent,
    CurrencyComponent,
    AddCurrencyComponent,
    DivisionComponent,
    AddDivisionComponent,
    DesignationComponent,
    AddDesignationComponent,
    MenuRightsComponent,
    HeadQuartersComponent,
    WorkTypeComponent,
    AddWorkTypeComponent,
    HoUserComponent,
    AddHeadQuartersComponent,
    AddHoUserComponent,
  ],
})
export class BasicDetailsModule {}
