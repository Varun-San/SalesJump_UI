import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveMasterMainRoutingModule } from './leave-master-main-routing.module';
import { MastersComponent } from '../masters.component';
import { LeaveMasterMainComponent } from './leave-master-main.component';
import { LeaveTypeComponent } from './Leave Type/leave-type.component';
import { AddLeaveTypeComponent } from './Leave Type/Add Leave Type/add-leave-type.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeaveMasterMainRoutingModule,
    MastersComponent,
    LeaveMasterMainComponent,
    LeaveTypeComponent,
    AddLeaveTypeComponent,
  ],
})
export class LeaveMasterMainModule {}
