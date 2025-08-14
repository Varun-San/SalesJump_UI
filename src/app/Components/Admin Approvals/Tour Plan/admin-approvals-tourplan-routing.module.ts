import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApprovalsComponent } from '../admin-approvals.component';
import { AdminApprovalsTourplanComponent } from './admin-approvals-tourplan.component';
import { AdminTourPlanComponent } from './TourPlan Approval/admin-tour-plan.component';

const routes: Routes = [
  {
    path: '',
    component: AdminApprovalsComponent,
    children: [
      {
        path: 'admin-tour-plan',
        component: AdminApprovalsTourplanComponent,
        children: [
          {
            path: 'tour-plan-approval',
            component: AdminTourPlanComponent,
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
export class AdminApprovalsTourplanRoutingModule {}
