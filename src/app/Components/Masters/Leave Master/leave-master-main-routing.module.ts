import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { LeaveMasterMainComponent } from './leave-master-main.component';
import { LeaveTypeComponent } from './Leave Type/leave-type.component';
import { AddLeaveTypeComponent } from './Leave Type/Add Leave Type/add-leave-type.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'leave-master',
        component: LeaveMasterMainComponent,
        children: [
          {
            path: 'leave-type',
            component: LeaveTypeComponent,
            children: [
              {
                path: 'add-leave-type',
                component: AddLeaveTypeComponent,
              },
            ],
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
export class LeaveMasterMainRoutingModule {}
