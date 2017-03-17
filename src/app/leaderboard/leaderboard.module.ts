// ANGULAR IMPORTS
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { LeaderboardRouter } from './leaderboard.router';

// COMPONENTS
import { LeaderboardComponent } from './leaderboard.component';

// SERVICES
import { LeaderboardService } from './leaderboard.service';


@NgModule({
  declarations: [
    LeaderboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LeaderboardRouter,
  ],
  providers: [ LeaderboardService, ],
})


export class LeaderboardModule { }
