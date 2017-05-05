import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LeaderboardRouter } from './leaderboard.router';
import { LeaderboardComponent } from './leaderboard.component';
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
