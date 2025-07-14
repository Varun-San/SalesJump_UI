import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'geography',
        component: GeographyComponent,
        children: [
          {
            path: 'area',
            component: AreaComponent,
            children: [
              {
                path: 'add-area',
                component: AddAreaComponent,
              },
            ],
          },
          {
            path: 'zone',
            component: ZoneComponent,
            children: [
              {
                path: 'add-zone',
                component: AddZoneComponent,
              },
            ],
          },
          {
            path: 'territory',
            component: TerritoryComponent,
            children: [
              {
                path: 'add-territory',
                component: AddTerritoryComponent,
              },
            ],
          },
          {
            path: 'district',
            component: DistrictComponent,
            children: [
              {
                path: 'add-district',
                component: AddDistrictComponent,
              },
            ],
          },
          {
            path: 'town',
            component: TownComponent,
            children: [
              {
                path: 'add-town',
                component: AddTownComponent,
              },
            ],
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
export class GeographyRoutingModule {}
