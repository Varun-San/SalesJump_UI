import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApprovalsComponent } from '../admin-approvals.component';
import { AdminLeaveApprovalComponent } from './Leave Approval/admin-leave-approval.component';
import { AdminApprovalsLeaveComponent } from './admin-approvals-leave.component';
import { AdminCancellationComponent } from './Cancellation/admin-cancellation.component';

const routes: Routes = [
  {
    path: '',
    component: AdminApprovalsComponent,
    children: [
      {
        path: 'admin-leave-approval',
        component: AdminApprovalsLeaveComponent,
        children: [
          {
            path: 'leave-approval',
            component: AdminLeaveApprovalComponent,
          },
          {
            path: 'cancellation',
            component: AdminCancellationComponent,
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
export class AdminApprovalsLeaveRoutingModule {}
