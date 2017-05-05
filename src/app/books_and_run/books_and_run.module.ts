// ANGULAR IMPORTS
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// MODULES
import { BooksAndRunRouter } from './books_and_run.router';
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { BooksAndRunComponent } from "./books_and_run.component";
import { BooksAndRunPlayComponent } from './play/books_and_run_play.component';
import { BooksAndRunService } from './books_and_run.service';
// import { FriendService } from '../friend.service';


@NgModule({
  declarations: [
    BooksAndRunComponent,
    BooksAndRunPlayComponent,
  ],
  imports: [
    CommonModule,
    BooksAndRunRouter,
    SharedModule,
  ],
  exports: [
  ],
  // providers: [ FriendService, BooksAndRunService ],
  providers: [ BooksAndRunService ],
})


export class BooksAndRunModule { }
