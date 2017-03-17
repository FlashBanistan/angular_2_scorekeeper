import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard/dashboard.component';
//import { BooksAndRunCreateComponent } from './books_and_run/books_and_run_create.component';
///import { BooksAndRunPlayComponent } from './books_and_run/books_and_run_play.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login',  component: AuthenticationComponent },
  { path: 'dashboard',  loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'leaderboard',  loadChildren: './leaderboard/leaderboard.module#LeaderboardModule' },
  { path: 'books_and_run', loadChildren: './books_and_run/books_and_run.module#BooksAndRunModule' },
  //{ path: 'books_and_run/create', component: BooksAndRunCreateComponent },
  //{ path: 'books_and_run/play', component: BooksAndRunPlayComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
