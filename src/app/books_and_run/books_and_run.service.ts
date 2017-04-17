import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Game, Player, Score, Round } from './books_and_run.classes'


@Injectable()
export class BooksAndRunService {
    constructor(){
      console.log('books_and_run.service instantiated...');
    }

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
          player['scores'] = new Score(null);
      });

      // Attach the initalized variables to the game.
      game.players = players;
      game.rounds = rounds;

      return game;

    }

    restoreGame() {
      var game;
      game = JSON.parse(localStorage.getItem('game'));

      game.players.forEach(function(player){
        player.scores.getTotal = function(){
          let total = 0;
          if(!isNaN(parseInt(this.roundOne))) total+=parseInt(this.roundOne);
          if(!isNaN(parseInt(this.roundTwo))) total+=parseInt(this.roundTwo);
          if(!isNaN(parseInt(this.roundThree))) total+=parseInt(this.roundThree);
          if(!isNaN(parseInt(this.roundFour))) total+=parseInt(this.roundFour);
          if(!isNaN(parseInt(this.roundFive))) total+=parseInt(this.roundFive);
          if(!isNaN(parseInt(this.roundSix))) total+=parseInt(this.roundSix);
          if(!isNaN(parseInt(this.roundSeven))) total+=parseInt(this.roundSeven);

          return total;
        };
      });

      return game;

    }

    saveGame(game) {
      localStorage.setItem('game', JSON.stringify(game));
    }

    isGameFinished(game) {
      game.players.forEach(function(player) {
        console.log(player)
        for(var key in player.scores) {
          if(key !== 'getTotal') {
            if(player.scores[key] === null || player.scores[key] ==="") {
              // alert("Game is not finished!")
              return false;
            }
          }
        }
        return true;
      })
    }


}
