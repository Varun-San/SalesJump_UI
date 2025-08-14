import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminApprovalsTourplanRoutingModule } from './admin-approvals-tourplan-routing.module';
import { AdminTourPlanComponent } from './TourPlan Approval/admin-tour-plan.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminApprovalsTourplanRoutingModule,
    AdminTourPlanComponent,
  ],
})
export class AdminApprovalsTourplanModule {}
