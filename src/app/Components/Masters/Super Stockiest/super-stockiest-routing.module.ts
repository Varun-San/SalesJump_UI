import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { SuperStockiestComponent } from './super-stockiest.component';
import { SuperStockiestDetailsComponent } from './Super Stockiest Details/super-stockiest-details.component';
import { AddSuperSockiestDetailsComponent } from './Super Stockiest Details/Add Super Sockiest Details/add-super-sockiest-details.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'super-stockiest',
        component: SuperStockiestComponent,
        children: [
          {
            path: 'super-stockiest-details',
            component: SuperStockiestDetailsComponent,
            children: [
              {
                path: 'add-super-sockiest',
                component: AddSuperSockiestDetailsComponent,
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
export class SuperStockiestRoutingModule {}
