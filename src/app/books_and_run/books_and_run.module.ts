import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAndRunRouter } from './books_and_run.router';
import { SharedModule } from '../shared/shared.module';
import { BooksAndRunComponent } from "./books_and_run.component";
import { BooksAndRunPlayComponent } from './play/books_and_run_play.component';
import { BooksAndRunService } from './books_and_run.service';


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
  providers: [ BooksAndRunService ],
})


export class BooksAndRunModule { }
