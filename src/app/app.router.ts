import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'leaderboard',  loadChildren: './leaderboard/leaderboard.module#LeaderboardModule' },
  { path: 'books_and_run', loadChildren: './books_and_run/books_and_run.module#BooksAndRunModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [ RouterModule ]
})


export class AppRouter {}
