import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminApprovalsLeaveRoutingModule } from './admin-approvals-leave-routing.module';
import { AdminLeaveApprovalComponent } from './Leave Approval/admin-leave-approval.component';
import { AdminApprovalsLeaveComponent } from './admin-approvals-leave.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminApprovalsLeaveRoutingModule,
    AdminLeaveApprovalComponent,
    AdminApprovalsLeaveComponent,
  ],
})
export class AdminApprovalsLeaveModule {}
