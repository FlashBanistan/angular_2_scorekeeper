import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LeaderboardComponent }   from './leaderboard/leaderboard.component';
import { HighScoreComponent }   from './high_score/high-score.component';
import { ProfileComponent }   from './profile/profile.component';
import { BooksAndRunCreateComponent } from './books_and_run/books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run/books_and_run_play.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login',  component: AuthenticationComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'leaderboard',  component: LeaderboardComponent },
  { path: 'high_scores',  component: HighScoreComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'books_and_run/create', component: BooksAndRunCreateComponent },
  { path: 'books_and_run/play', component: BooksAndRunPlayComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
