import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { FieldForceTabComponent } from './field-force-tab.component';
import { FieldForceComponent } from './Field Force/field-force.component';
import { AddEmployeeComponent } from './Field Force/Add Employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'field-force',
        component: FieldForceTabComponent,
        children: [
          {
            path: 'field-force-t',
            component: FieldForceComponent,
          },
          {
            path: 'add-employee-ff',
            component: AddEmployeeComponent,
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
export class FieldForceRoutingModule {}
