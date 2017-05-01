// ANGULAR IMPORTS
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BooksAndRunService } from '../books_and_run.service';
import { Score } from '../books_and_run.classes';
import { Observable } from 'rxjs/Rx';

import { FriendService } from '../../friend.service';
import { Friend } from '../../friend';

// 3rd PARTY IMPORTS
import {ViewContainerRef} from '@angular/core';
import {ToastsManager, Toast} from 'ng2-toastr';



@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent implements OnInit, AfterViewChecked {
  public game;
  public friends: Friend[];

  constructor(
    public booksAndRunService: BooksAndRunService,
    private toastr: ToastsManager, vRef: ViewContainerRef,
    private friendService: FriendService
  ) {
    this.toastr.setRootViewContainerRef(vRef);

  }


  ngOnInit(): void {
    this.friendService.getFriendList()
      .subscribe(
        results => this.friends=results,
        error => this.toastr.error('Error fetching friends list.', 'Failure!', { toastLife: 5000, showCloseButton: false })
      );

    // Either restore game or create a new one:
    if (localStorage.getItem('game') === null) {
      this.game = this.booksAndRunService.prepareGame();
      // this.booksAndRunService.saveGame(this.game);
    } else {
      this.game = this.booksAndRunService.restoreGame();
    };
  }


  ngAfterViewChecked() {
    // Saves the game after every keystroke:
    // this.booksAndRunService.saveGame(this.game);
  }


  resetGame() {
    this.game.players.forEach(function(player) {
      player.scores = new Score("");
    })
  }


  createNewGame() {
    // this.booksAndRunService.deleteGame()
    console.log(this.friends)
  }


  finishGame(game) {
    if (!this.booksAndRunService.isGameFinished(game.players)) return this.toastr.warning('Please finish the game.');

    var scoredPlayers = this.booksAndRunService.generatePlayersStats(game.players);
    var winner = this.booksAndRunService.getWinner(scoredPlayers);

    scoredPlayers = this.booksAndRunService.assignWinOrLose(scoredPlayers);

    for (var i = 0; i < scoredPlayers.length; i++) {
      this.booksAndRunService.recordStats(scoredPlayers[i])
        .map(
        (res => res.json()),
      )
        .subscribe(
        (result => this.toastr
          .success(result.user.username + ', has been saved.', 'Success!', { toastLife: 5000, showCloseButton: false })),
        (error => this.toastr
          .error(error.statusText + '.  Write your stats down before resetting the game.', 'Failure!', { toastLife: 5000, showCloseButton: false }))
        )
    }
  }


}
