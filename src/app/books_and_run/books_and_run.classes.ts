export class Game {
    players: Player[] = [];
    rounds: Round[] = [
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
}

export class Round {
    description: string;
    roundNumber: number;
    title: string;
    winner: any;
}

export class Player {
    first_name: string;
    last_name: string;
    pk: number;
    score: Score[];
    url: string;
}

export class Score {
    constructor(val){
      this.roundOne=val;
      this.roundTwo=val;
      this.roundThree=val;
      this.roundFour=val;
      this.roundFive=val;
      this.roundSix=val;
      this.roundSeven=val;
    }
    roundOne: any;
    roundTwo: any;
    roundThree: any;
    roundFour: any;
    roundFive: any;
    roundSix: any;
    roundSeven: any;
    getTotal() {
      let total = 0;
      if(!isNaN(parseInt(this.roundOne))) total+=parseInt(this.roundOne);
      if(!isNaN(parseInt(this.roundTwo))) total+=parseInt(this.roundTwo);
      if(!isNaN(parseInt(this.roundThree))) total+=parseInt(this.roundThree);
      if(!isNaN(parseInt(this.roundFour))) total+=parseInt(this.roundFour);
      if(!isNaN(parseInt(this.roundFive))) total+=parseInt(this.roundFive);
      if(!isNaN(parseInt(this.roundSix))) total+=parseInt(this.roundSix);
      if(!isNaN(parseInt(this.roundSeven))) total+=parseInt(this.roundSeven);

      return total;
    }
    isComplete() {
      for(var key in this) {
        if(this.hasOwnProperty(key)) {
          if(this[key].toString() === "") {
            return false;
          }
        }
      }
      return true;
    }




}
