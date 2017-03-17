import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BooksAndRunService } from './books_and_run.service';
import { Score } from './books_and_run.classes';



@Component({
  moduleId: module.id,
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunRootComponent implements OnInit, AfterViewChecked {
  constructor(public booksAndRunService: BooksAndRunService) { }




  ngOnInit(): void {

  }

  ngAfterViewChecked() {
  }

}
