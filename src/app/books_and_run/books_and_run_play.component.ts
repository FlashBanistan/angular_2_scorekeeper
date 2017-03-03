import { Component, OnInit } from '@angular/core';
import { BooksAndRunService } from '../books_and_run.service';



@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent implements OnInit {
  constructor(private booksAndRunService: BooksAndRunService) { }

  game = {};



  ngOnInit(): void {
    this.game = this.booksAndRunService.prepareGame();
    console.log(this.game);
  }

  calculateStats(game){
    console.log(game);
  }

}