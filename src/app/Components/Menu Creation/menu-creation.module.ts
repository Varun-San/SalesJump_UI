import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCreationRoutingModule } from './menu-creation-routing.module';
import { MenuCreationComponent } from './menu-creation.component';
import { AddMenuComponent } from './Add Menu/add-menu.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuCreationRoutingModule,
    MenuCreationComponent,
    AddMenuComponent,
  ],
})
export class MenuCreationModule {}
