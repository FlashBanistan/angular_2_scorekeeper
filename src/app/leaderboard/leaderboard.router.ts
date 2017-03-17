// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { LeaderboardComponent } from './leaderboard.component';


// DEFINE ROUTES
const routes: Routes = [
  {path: '', component: LeaderboardComponent}, // locahost:4200/leaderboard
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule, 
  ]
})

export class LeaderboardRouter {};
