import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouter } from './app.router';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
//import { BooksAndRunModule } from './books_and_run/books_and_run.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    SharedModule,
    //BooksAndRunModule,
    AppRouter,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
