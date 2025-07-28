import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCreationComponent } from './menu-creation.component';
import { AddMenuComponent } from './Add Menu/add-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuCreationComponent,
    children: [
      {
        path: 'add-menu',
        component: AddMenuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCreationRoutingModule {}
