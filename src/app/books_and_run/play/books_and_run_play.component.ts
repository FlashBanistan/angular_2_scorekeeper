import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BooksAndRunService } from '../books_and_run.service';
import { Score } from '../books_and_run.classes';

import {ViewContainerRef} from '@angular/core';
import {ToastsManager, Toast} from 'ng2-toastr';



@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent implements OnInit, AfterViewChecked {
  constructor(public booksAndRunService: BooksAndRunService, private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  game = { players: []};



  ngOnInit(): void {
    var game: any;

    if(localStorage.getItem('game') === null) {
      this.game = this.booksAndRunService.prepareGame();
      this.booksAndRunService.saveGame(this.game);
    } else {
        this.game = this.booksAndRunService.restoreGame();
    };
  }


  ngAfterViewChecked() {
    this.booksAndRunService.saveGame(this.game);
  }


  recordStats(game) {
    // Check that the game is finished:
    if(this.booksAndRunService.isGameFinished(game)) {
      console.log("Game is finished.  Continuing...")
      this.toastr.success('You are awesome!', 'Success!', {toastLife: 3000, showCloseButton: false});
      // Determine number of rounds won for each player:
      // Determine total score for each player:
      // Determine winner of game:
    }
    else this.toastr.warning('Please finish the game first.');
  }


}
