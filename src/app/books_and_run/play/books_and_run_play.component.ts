// ANGULAR IMPORTS
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BooksAndRunService } from '../books_and_run.service';
import { Score } from '../books_and_run.classes';
import { Observable } from 'rxjs/Rx';

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
  constructor(public booksAndRunService: BooksAndRunService, private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  game = { players: []};


  ngOnInit(): void {
    // Either restore game or create a new one:
    if(localStorage.getItem('game') === null) {
      this.game = this.booksAndRunService.prepareGame();
      this.booksAndRunService.saveGame(this.game);
    } else {
        this.game = this.booksAndRunService.restoreGame();
    };
  }


  ngAfterViewChecked() {
    // Saves the game after every keystroke:
    this.booksAndRunService.saveGame(this.game);
  }


  recordStats(game) {

    // Check that the game is finished:
    if(this.booksAndRunService.gameFinished(game)) {

      // Determine total score and number of rounds won for each player:
      var players = [];
      game.players.forEach(function(player) {
        var tempPlayer = {};
        var roundsWon = 0;
        for(var score in player.scores) {
          if(player.scores.hasOwnProperty(score)) {
            if(player.scores[score] == 0) {
              roundsWon += 1;
            }
          }
        }
        tempPlayer['pk'] = player.pk;
        tempPlayer['score'] = player.scores.getTotal();
        tempPlayer['num_hands_won'] = roundsWon;
        players.push(tempPlayer)
      })

      // Determine winner of game:
      var lowScore = players[0].score;
      var winner = players[0].pk
      for(var i=0; i<players.length; i++) {
        if(players[i].score < lowScore) {
          winner = players[i].pk
          lowScore = players[i].score
        }
      }

      // Assign winner true or false to each player:
      players.forEach(function(player) {
        if(player.pk === winner) {
          player['is_winner'] = true;
        }
        else {
          player['is_winner'] = false;
        }
      })

      // Push the stats to the database:
      for(var i=0; i<players.length; i++) {
        this.booksAndRunService.savePlayerStats(players[i])
          .map(
            (res => res.json()),
          )
          .subscribe(
            (result => this.toastr
              .success(result.user.username + ', has been saved.', 'Success!', {toastLife: 5000, showCloseBUtton: false})),
            (error => this.toastr
              .error(error.statusText + '.  Write your stats down before resetting the game.', 'Failure!', {toastLife: 5000, showCloseBUtton: false}))
          )
      }

    }
    else this.toastr.warning('Please finish the game.');
  }

  resetGame() {
    this.game.players.forEach(function(player) {
      player.scores = new Score("");
    })
  }

  createNewGame() {
    this.booksAndRunService.deleteGame()
  }


}
