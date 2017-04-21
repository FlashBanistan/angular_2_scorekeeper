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
            if(this.players[i].pk === player.pk) {
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


    gameFinished(game) {
      for(var i in game.players) {
        if(!game.players[i].scores.isComplete()) {
          return false;
        }
      }
      return true;
    }

    savePlayerStats(player) {
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this.http.put('http://localhost:8000/api/books_and_run/statistics/' + player.pk + '/', JSON.stringify(player), {headers: headers});
    }


}
