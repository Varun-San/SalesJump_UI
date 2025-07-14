import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiruclarComponent } from './ciruclar.component';
import { CircularListComponent } from './Circular-List/circular-list.component';
import { MastersComponent } from '../masters.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'circular',
        component: CiruclarComponent,
        children: [
          {
            path: 'circular-list',
            component: CircularListComponent,
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
export class CircularRoutingModule {}
