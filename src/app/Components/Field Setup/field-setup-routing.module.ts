import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from '../Setup/Configuration/configuration.component';
import { GeneralSettingsComponent } from '../Setup/Configuration/General Settings/general-settings.component';
import { UserWiseSettingsComponent } from '../Setup/Configuration/User Wise Settings/user-wise-settings.component';
import { FieldSetupComponent } from './field-setup.component';
import { GeneralSettingsFsComponent } from './General Settings FS/general-settings-fs.component';
import { AddFieldComponent } from './General Settings FS/Add Field/add-field.component';
import { SingleSelectionNewValueComponent } from './General Settings FS/Add Field/Single Selection New Value/single-selection-new-value.component';
import { UserSettingsFsComponent } from './User Settings FS/user-settings-fs.component';

const routes: Routes = [
  {
    path: '',
    component: FieldSetupComponent,
    children: [
      {
        path: 'fs-general-settings',
        component: GeneralSettingsFsComponent,
        children: [
          {
            path: 'add-field',
            component: AddFieldComponent,
            children: [
              {
                path: 'new-single-selection-value',
                component: SingleSelectionNewValueComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'fs-user-settings',
        component: UserSettingsFsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldSetupRoutingModule {}
