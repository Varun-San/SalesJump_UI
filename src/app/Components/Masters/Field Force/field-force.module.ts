import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldForceRoutingModule } from './field-force-routing.module';
import { MastersComponent } from '../masters.component';
import { FieldForceComponent } from './Field Force/field-force.component';
import { FieldForceTabComponent } from './field-force-tab.component';
import { AddEmployeeComponent } from './Field Force/Add Employee/add-employee.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldForceRoutingModule,
    MastersComponent,
    FieldForceComponent,
    FieldForceTabComponent,
    AddEmployeeComponent,
  ],
})
export class FieldForceModule {}
