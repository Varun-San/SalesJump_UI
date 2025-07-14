import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeographyRoutingModule } from './geography-routing.module';
import { MastersComponent } from '../masters.component';
import { GeographyComponent } from './geography.component';
import { AreaComponent } from './Area/area.component';
import { AddAreaComponent } from './Add Area/add-area.component';
import { ZoneComponent } from './Zone/zone.component';
import { AddZoneComponent } from './Add Zone/add-zone.component';
import { TerritoryComponent } from './Territory/territory.component';
import { AddTerritoryComponent } from './Add Territory/add-territory.component';
import { DistrictComponent } from './District/district.component';
import { AddDistrictComponent } from './Add District/add-district.component';
import { TownComponent } from './Town/town.component';
import { AddTownComponent } from './Add Town/add-town.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeographyRoutingModule,
    MastersComponent,
    GeographyComponent,
    AreaComponent,
    AddAreaComponent,
    ZoneComponent,
    AddZoneComponent,
    TerritoryComponent,
    AddTerritoryComponent,
    DistrictComponent,
    AddDistrictComponent,
    TownComponent,
    AddTownComponent,
  ],
})
export class GeographyModule {}
