import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from '../masters.component';
import { GamificationComponent } from './gamification.component';
import { CompetitionsComponent } from './Competitions/competitions.component';
import { AddCompetitionsComponent } from './Competitions/Add Competitions/add-competitions.component';
import { PlayerSelectionComponent } from './Competitions/Add Competitions/Player Selection/player-selection.component';
import { TeamHeadComponent } from './Competitions/Add Competitions/Team Head/team-head.component';
import { FormulaComponent } from './Formula/formula.component';
import { RewardsComponent } from './Rewards/rewards.component';
import { LevelsComponent } from './Levels/levels.component';

const routes: Routes = [
  {
    path: '',
    component: MastersComponent,
    children: [
      {
        path: 'gamification',
        component: GamificationComponent,
        children: [
          {
            path: 'competitions',
            component: CompetitionsComponent,
            children: [
              {
                path: 'add-competitions',
                component: AddCompetitionsComponent,
                children: [
                  {
                    path: 'player-selection',
                    component: PlayerSelectionComponent,
                  },
                  {
                    path: 'team-head',
                    component: TeamHeadComponent,
                  },
                ],
              },
            ],
          },
          {
            path: 'formula',
            component: FormulaComponent,
          },
          {
            path: 'rewards',
            component: RewardsComponent,
          },
          {
            path: 'levels',
            component: LevelsComponent,
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
export class GamificationRoutingModule {}
