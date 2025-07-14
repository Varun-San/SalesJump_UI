import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { RouteComponent } from './route.component';
import { RouteListComponent } from './Route List/route-list.component';
import { AddRouteListComponent } from './Route List/Add Route List/add-route-list.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'route',
        component: RouteComponent,
        children: [
          {
            path: 'route-list',
            component: RouteListComponent,
            children: [
              {
                path: 'add-route-list',
                component: AddRouteListComponent,
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
export class RouteRoutingModule {}
