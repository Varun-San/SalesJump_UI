import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReportResourcesRoutingModule } from './admin-report-resources-routing.module';
import { MyResourcesComponent } from './My Resources/my-resources.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminReportResourcesRoutingModule,
    MyResourcesComponent,
  ],
})
export class AdminReportResourcesModule {}
