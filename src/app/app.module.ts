import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BooksAndRunModule } from './books_and_run/books_and_run.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendService } from './friend.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BooksAndRunModule,
    LeaderboardModule,
    AuthenticationModule,
    SharedModule,
  ],
  providers: [ FriendService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
