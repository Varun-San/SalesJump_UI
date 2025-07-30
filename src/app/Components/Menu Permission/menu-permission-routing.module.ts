import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPermissionComponent } from './menu-permission.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPermissionComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPermissionRoutingModule {}
