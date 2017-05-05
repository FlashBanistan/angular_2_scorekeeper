import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Statistics } from './statistics';


@Component({
  moduleId: module.id,
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})


export class LeaderboardComponent implements OnInit {
  constructor(private leaderboardService: LeaderboardService) {}
  term: string;
  isRequesting: boolean;
  statistics: Statistics[] = [];
  categories: any[] = [
    {
      title: "User",
      order: null,
    },
    {
      title: "Wins",
      order: null,
    },
    {
      title: "Low",
      order: null,
    },
    {
      title: "High",
      order: null,
    }
  ];


  ngOnInit(): void {
    this.isRequesting = true;
     this.leaderboardService
      .getStatistics()
        .subscribe(
                  data => this.statistics = data,
                  () => this.stopRefreshing(),
                  () => this.stopRefreshing(),
              )
  }


  stopRefreshing() {
    this.isRequesting = false;
  }


  sort(category, stats): void {
    switch(category.title) {
      case "User":
      if(category.order === "asc" || category.order === null) {
        stats.sort(function(item1, item2) {
          if ( item1.user.username < item2.user.username ){
            return -1;
          }else if( item1.user.username > item2.user.username ){
              return 1;
          }else{
            return 0;
          }
        });
        category.order = "desc";
      }
      else {
        stats.reverse()
        category.order = 'asc';
      }
      break;
      case "Wins":
        if(category.order === "asc" || category.order === null) {
          stats.sort(function(item1, item2) {
            if ( item1.games_won < item2.games_won ){
              return -1;
            }else if( item1.games_won > item2.games_won ){
                return 1;
            }else{
              return 0;
            }
          });
          category.order = "desc";
        }
        else {
        stats.reverse()
        category.order = 'asc';
      }
        break;
      case "Low":
        if(category.order === "asc" || category.order === null) {
          stats.sort(function(item1, item2) {
            if ( item1.low_score < item2.low_score ){
              return -1;
            }else if( item1.low_score > item2.low_score ){
                return 1;
            }else{
              return 0;
            }
          });
          category.order = "desc";
        }
        else {
        stats.reverse()
        category.order = 'asc';
      }
        break;
      case "High":
        if(category.order === "asc" || category.order === null) {
          stats.sort(function(item1, item2) {
            if ( item1.high_score < item2.high_score ){
              return -1;
            }else if( item1.high_score > item2.high_score ){
                return 1;
            }else{
              return 0;
            }
          });
          category.order = "desc";
        }
        else {
        stats.reverse()
        category.order = 'asc';
      }
        break;

    default:
      confirm("Sorry, somethings went wrong.");
    }
  }

}
