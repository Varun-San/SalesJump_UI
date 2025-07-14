import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { MastersComponent } from '../masters.component';
import { RouteComponent } from './route.component';
import { RouteListComponent } from './Route List/route-list.component';
import { AddRouteListComponent } from './Route List/Add Route List/add-route-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouteRoutingModule,
    MastersComponent,
    RouteComponent,
    RouteListComponent,
    AddRouteListComponent,
  ],
})
export class RouteModule {}
