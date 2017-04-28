import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Game, Player, Score, Round } from './books_and_run.classes'


@Injectable()
export class BooksAndRunService {constructor(private http: Http){}


    players: Player[] = [];


    getPlayers() {
        return this.players;
    }


    addPlayer(player) {
        this.players.push(player);
    }


    removePlayer(player) {
        for(var i=0; i<this.players.length; i++) {
            if(this.players[i].url == player.url) {
                this.players.splice(i, 1);
            }
        }
    }


    resetPlayers() {
        this.players = [];
    }


    prepareGame(){
      // Initialize game variables
      let players: Player[] = this.getPlayers();
      let rounds: Round[] = [
        {
            roundNumber: 1,
            title: "Round 1",
            description: "2 Books",
            winner: undefined,
        },
        {
            roundNumber: 2,
            title: "Round 2",
            description: "1 Book 1 Run",
            winner: undefined,
        },
        {
            roundNumber: 3,
            title: "Round 3",
            description: "2 Runs",
            winner: undefined,
        },
        {
            roundNumber: 4,
            title: "Round 4",
            description: "3 Books",
            winner: undefined,
        },
        {
            roundNumber: 5,
            title: "Round 5",
            description: "2 Books 1 Run",
            winner: undefined,
        },
        {
            roundNumber: 6,
            title: "Round 6",
            description: "2 Runs 1 Book",
            winner: undefined,
         },
        {
            roundNumber: 7,
            title: "Round 7",
            description: "3 Runs",
            winner: undefined,
        },
        {
            roundNumber: 0,
            title: "Total",
            description: "undefined",
            winner: undefined,
        },
      ];
      let game: Game = {
        players: [],
        rounds: [],
      };

      // Attach a 'scores' property to each player in the game
      players.forEach(function(player){
          player['scores'] = new Score("");
      });

      // Attach the initalized variables to the game.
      game.players = players;
      game.rounds = rounds;

      return game;

    }


    restoreGame() {
      var game;
      game = JSON.parse(localStorage.getItem('game'))
      game.players.forEach(function(player) {
        Object.setPrototypeOf(player.scores, Score.prototype)
      })

      return game;
    }


    saveGame(game) {
      localStorage.setItem('game', JSON.stringify(game));
    }


    deleteGame() {
      return localStorage.removeItem('game');
      // return "Game deleted succesfully!"
    }

    /* Loops through an array of players to check if scores are complete */
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

      return this.http.put('http://localhost:8000/api/books_and_run/statistics/' + scoredPlayer.pk + '/', JSON.stringify(scoredPlayer), {headers: headers});
    }




}
