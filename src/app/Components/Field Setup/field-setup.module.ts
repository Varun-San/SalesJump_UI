import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldSetupRoutingModule } from './field-setup-routing.module';
import { FieldSetupComponent } from './field-setup.component';
import { GeneralSettingsFsComponent } from './General Settings FS/general-settings-fs.component';
import { AddFieldComponent } from './General Settings FS/Add Field/add-field.component';
import { SingleSelectionNewValueComponent } from './General Settings FS/Add Field/Single Selection New Value/single-selection-new-value.component';
import { UserSettingsFsComponent } from './User Settings FS/user-settings-fs.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldSetupRoutingModule,
    FieldSetupComponent,
    GeneralSettingsFsComponent,
    AddFieldComponent,
    SingleSelectionNewValueComponent,
    UserSettingsFsComponent,
  ],
})
export class FieldSetupModule {}
