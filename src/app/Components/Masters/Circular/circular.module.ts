import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircularRoutingModule } from './circular-routing.module';
import { CiruclarComponent } from './ciruclar.component';
import { CircularListComponent } from './Circular-List/circular-list.component';
import { MastersComponent } from '../masters.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CircularRoutingModule,
    CiruclarComponent,
    CircularListComponent,
    MastersComponent,
  ],
})
export class CircularModule {}
