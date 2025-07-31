import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEntryComponent } from '../admin-entry.component';
import { LeaveComponent } from './leave.component';
import { LeaveEntryComponent } from './Leave Entry/leave-entry.component';
import { LeaveEligibilityComponent } from './Leave Eligibility/leave-eligibility.component';

const routes: Routes = [
  {
    path: '',
    component: AdminEntryComponent,
    children: [
      {
        path: 'leave',
        component: LeaveComponent,
        children: [
          {
            path: 'leave_entry',
            component: LeaveEntryComponent,
          },
          {
            path: 'leave_eligibility',
            component: LeaveEligibilityComponent,
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
export class LeaveRoutingModule {}
