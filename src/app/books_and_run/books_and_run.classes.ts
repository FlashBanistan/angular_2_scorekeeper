export class Game {
    players: Player[];
    rounds: Round[];
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
