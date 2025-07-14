import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { GeneralSettingsComponent } from './General Settings/general-settings.component';
import { UserWiseSettingsComponent } from './User Wise Settings/user-wise-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      {
        path: 'general-settings',
        component: GeneralSettingsComponent,
      },
      {
        path: 'user-settings',
        component: UserWiseSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
