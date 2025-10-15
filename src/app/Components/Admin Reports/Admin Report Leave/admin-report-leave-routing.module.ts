import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReportsComponent } from '../admin-reports.component';
import { AvailabilityStatusComponent } from './Availability Status/availability-status.component';
import { LeaveCardComponent } from './Leave Card/leave-card.component';
import { LeaveStatusComponent } from './Leave Status/leave-status.component';
import { AdminReportLeaveComponent } from './admin-report-leave.component';

const routes: Routes = [
  {
    path: '',
    component: AdminReportsComponent,
    children: [
      {
        path: 'admin-reports-leave',
        component: AdminReportLeaveComponent,
        children: [
          {
            path: 'availability-status',
            component: AvailabilityStatusComponent,
          },
          {
            path: 'leave-card',
            component: LeaveCardComponent,
          },
          {
            path: 'leave-status',
            component: LeaveStatusComponent,
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
export class AdminReportLeaveRoutingModule {}
