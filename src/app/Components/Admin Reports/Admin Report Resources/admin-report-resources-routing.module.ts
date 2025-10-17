import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReportResourcesComponent } from './admin-report-resources.component';
import { AdminReportsComponent } from '../admin-reports.component';
import { MyResourcesComponent } from './My Resources/my-resources.component';

const routes: Routes = [
  {
    path: '',
    component: AdminReportsComponent,
    children: [
      {
        path: 'admin-reports-resources',
        component: AdminReportResourcesComponent,
        children: [
          {
            path: 'my-resources',
            component: MyResourcesComponent,
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
export class AdminReportResourcesRoutingModule {}
