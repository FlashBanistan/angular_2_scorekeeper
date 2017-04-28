import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Friend } from '../../friend';
import { FriendService } from '../../friend.service';
import { BooksAndRunService } from '../books_and_run.service';


@Component({
  moduleId: module.id,
  selector: 'books-and-run-create',
  templateUrl: './books_and_run_create.component.html',
  styleUrls: ['./books_and_run_create.component.css'],
})


export class BooksAndRunCreateComponent implements OnInit {
  constructor(public friendService: FriendService, private booksAndRunService: BooksAndRunService, private router: Router) { }

  isRequesting: boolean;
  // friendList: Friend[] = [];
  friendList = [];
  players: any[] = [];

  private stopRefreshing() {
    this.isRequesting = false;
  }


  ngOnInit(): void {
    this.booksAndRunService.resetPlayers();
    this.booksAndRunService.addPlayer(JSON.parse(localStorage.getItem('user')))
    this.players = this.booksAndRunService.getPlayers();
    this.isRequesting = true;
    this.friendService
      .getFriendList()
        .subscribe(
          // data => this.friendList = data,
          data => this.friendList = data,
          () => this.stopRefreshing(),
          () => this.stopRefreshing(),
        )
  }

  addPlayer(player): void {
    this.booksAndRunService.addPlayer(player);
    for(var i=0; i<this.friendList.length; i++) {
            if(this.friendList[i].url === player.url) {
                this.friendList.splice(i, 1);
            }
        }
    this.players = this.booksAndRunService.getPlayers();
  }

  removePlayer(player): void {
    this.booksAndRunService.removePlayer(player);
    this.friendList.push(player);
    this.players = this.booksAndRunService.getPlayers();
  }

  goToGame(): void {
    this.router.navigate(['/books_and_run/play'])
  }



}
