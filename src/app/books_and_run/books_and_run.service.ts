import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Game, Score } from './books_and_run.classes'


@Injectable()
export class BooksAndRunService {constructor(private http: Http){}
    /*
    Prepares a new game instance.
    Accepts void.
    Returns game object.
    */
    prepareGame(){
      return new Game;
    }

    /*
    Restores game from local storages; restores scores prototype to players.
    Accepts void.
    Returns game object.
    */
    restoreGame() {
      var game;
      game = JSON.parse(localStorage.getItem('game'))
      game.players.forEach(function(player) {
        Object.setPrototypeOf(player.scores, Score.prototype)
      })

      return game;
    }

    /*
    Saves game to local storage.
    Accepts game object.
    Returns void.
    */
    saveGame(game) {
      localStorage.setItem('game', JSON.stringify(game));
    }

    /*
    Removes game from local storage.
    Accepts void.
    Returns void.
    */
    deleteGame() {
      localStorage.removeItem('game');
    }

    /*
    Loops through an array of players to check if scores are complete.
    Accepts an array of player objects.
    Returns true or false;
     */
    isGameFinished(players) {
      for(var i in players) {
        if(!players[i].scores.isComplete()) {
          return false;
        }
      }
      return true;
    }

    /*
    Determines total score and number of rounds won for each player.
    Accepts an array of player objects.
    Returns an array of scored player objects with 'pk', 'score', and 'num_hands_won'.
    */
    generatePlayersStats(players) {
      var newPlayers = [];
      players.forEach(function(player) {
        let roundsWon = 0;
        for(let score in player.scores) {
          if(player.scores.hasOwnProperty(score)) {
            if(player.scores[score] == 0) {
              roundsWon +=1;
            }
          }
        }
        let tempPlayer = {
          "pk": player.pk,
          "score": player.scores.getTotal(),
          "num_hands_won": roundsWon,
        }
        newPlayers.push(tempPlayer);
      });
      return newPlayers
    }

    /*
    Determines winner of the game.
    Accepts an array of scored player objects.
    Returns a player object.
    */
    getWinner(scoredPlayers) {
      var lowScore = scoredPlayers[0].score;
      var winner = scoredPlayers[0]
      for(var i=0; i<scoredPlayers.length; i++) {
        if(scoredPlayers[i].score < lowScore) {
          winner = scoredPlayers[i]
          lowScore = scoredPlayers[i].score
        }
      }
      return winner
    }

    /*
    Assign winner or loser.
    Accepts an array of scored player objects.
    Return an array of scored player objects adding winner = true/false.
    */
    assignWinOrLose(scoredPlayers) {
      var winner = this.getWinner(scoredPlayers);
      scoredPlayers.forEach(function(player) {
        if(player.pk != winner.pk) {
          player['is_winner'] = false;
        } else {
          player['is_winner'] = true;
        }
      })
      return scoredPlayers
    }

    /*
    Record player statistics to the database.
    Accepts a scored player object with win or lose assigned.
    Returns null
    */
    recordStats(scoredPlayer) {
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this.http.put('https://django-scorekeeper-api.herokuapp.com/api/books_and_run/statistics/' + scoredPlayer.pk + '/', JSON.stringify(scoredPlayer), {headers: headers});
    }




}
