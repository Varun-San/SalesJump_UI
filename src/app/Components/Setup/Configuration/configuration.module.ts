import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { MastersComponent } from '../../Masters/masters.component';
import { ConfigurationComponent } from './configuration.component';
import { GeneralSettingsComponent } from './General Settings/general-settings.component';
import { UserWiseSettingsComponent } from './User Wise Settings/user-wise-settings.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    MastersComponent,
    ConfigurationComponent,
    GeneralSettingsComponent,
    UserWiseSettingsComponent,
  ],
})
export class ConfigurationModule {}
