import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BooksAndRunCreateComponent } from './books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run_play.component';
import { BooksAndRunService } from './books_and_run.service';
import { FriendService } from '../friend.service';

import { BooksAndRunRouter } from './books_and_run.router';
import {BooksAndRunRootComponent} from "./books_and_run_root.component";



@NgModule({
  declarations: [
    BooksAndRunCreateComponent,
    BooksAndRunPlayComponent,
    BooksAndRunRootComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksAndRunRouter,
  ],
  exports: [
  ],
  providers: [ FriendService, BooksAndRunService ],
})


export class BooksAndRunModule { }
