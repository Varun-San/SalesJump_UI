import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamificationRoutingModule } from './gamification-routing.module';
import { MastersComponent } from '../masters.component';
import { GamificationComponent } from './gamification.component';
import { CompetitionsComponent } from './Competitions/competitions.component';
import { AddCompetitionsComponent } from './Competitions/Add Competitions/add-competitions.component';
import { PlayerSelectionComponent } from './Competitions/Add Competitions/Player Selection/player-selection.component';
import { TeamHeadComponent } from './Competitions/Add Competitions/Team Head/team-head.component';
import { FormulaComponent } from './Formula/formula.component';
import { RewardsComponent } from './Rewards/rewards.component';
import { LevelsComponent } from './Levels/levels.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GamificationRoutingModule,
    MastersComponent,
    GamificationComponent,
    CompetitionsComponent,
    AddCompetitionsComponent,
    PlayerSelectionComponent,
    TeamHeadComponent,
    FormulaComponent,
    RewardsComponent,
    LevelsComponent,
  ],
})
export class GamificationModule {}
