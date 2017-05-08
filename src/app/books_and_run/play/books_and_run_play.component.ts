import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { BooksAndRunService } from '../books_and_run.service';
import { Score } from '../books_and_run.classes';
import { Observable } from 'rxjs/Rx';
import { Friend } from '../../shared/classes/friend';
import {ViewContainerRef} from '@angular/core';
import {ToastsManager, Toast} from 'ng2-toastr';
import 'rxjs/add/operator/takeWhile';


@Component({
  moduleId: module.id,
  selector: 'books-and-run-play',
  templateUrl: './books_and_run_play.component.html',
  styleUrls: ['./books_and_run_play.component.css'],
})


export class BooksAndRunPlayComponent implements OnInit, AfterViewChecked, OnDestroy {
  public game;
  private alive: boolean = true;
  public friends: Friend[] = [];

  constructor(
    public booksAndRunService: BooksAndRunService,
    private toastr: ToastsManager, vRef: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vRef);

  }

  onReceiveFriends(friends):void {
    this.friends = friends;
  }

  addFriendToGame(friend) {
    friend['scores'] = new Score('');
    if(this.game.players.find(function(player) {
      return friend.pk === player.pk;
    })) {
      return this.toastr
        .error("Player already in game!", "Failure!", { toastLife: 4000, showCloseButton: false })
    }
    this.game.players.push(friend);
    this.friends = [];
  }

  removeFriendFromGame(friend) {
    for(var i=0; i<this.game.players.length; i++) {
      if(friend.pk === this.game.players[i].pk) {
        return this.game.players.splice(i, 1);
      }
    }
  }

  ngOnInit(): void {
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

  ngOnDestroy() {
    this.alive = false;
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
    if(game.players.length <= 0) return this.toastr.warning('Add players to game.')
    if (!this.booksAndRunService.isGameFinished(game.players)) return this.toastr.warning('Please finish the game.');

    var scoredPlayers = this.booksAndRunService.generatePlayersStats(game.players);
    var winner = this.booksAndRunService.getWinner(scoredPlayers);

    scoredPlayers = this.booksAndRunService.assignWinOrLose(scoredPlayers);

    for (var i = 0; i < scoredPlayers.length; i++) {
      this.booksAndRunService.recordStats(scoredPlayers[i])
        .takeWhile(() => this.alive)
        .map(
        (res => res.json()),
        )
        .subscribe(
          (result => this.toastr
            .success(result.user.username + ', has been saved.', 'Success!')),
          (error => this.toastr
            .error(error.statusText + '.  Write your stats down before resetting the game.', 'Failure!'))
          )
    }
  }


}
