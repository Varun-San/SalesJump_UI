import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReportLeaveRoutingModule } from './admin-report-leave-routing.module';
import { AvailabilityStatusComponent } from './Availability Status/availability-status.component';
import { LeaveCardComponent } from './Leave Card/leave-card.component';
import { LeaveStatusComponent } from './Leave Status/leave-status.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminReportLeaveRoutingModule,
    AvailabilityStatusComponent,
    LeaveCardComponent,
    LeaveStatusComponent,
  ],
})
export class AdminReportLeaveModule {}
