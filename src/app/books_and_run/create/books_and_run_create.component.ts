import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FriendList } from '../../friendlist';
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
  name: string = 'Aaron';
  friendList: FriendList[] = [];
  players: any[] = [];

  private stopRefreshing() {
    this.isRequesting = false;
  }


  ngOnInit(): void {
    this.booksAndRunService.resetPlayers();
    this.isRequesting = true;
    this.friendService
      .getFriendList()
        .subscribe(
          data => this.friendList = data,
          () => this.stopRefreshing(),
          () => this.stopRefreshing(),
        )
  }

  addPlayer(player): void {
    this.booksAndRunService.addPlayer(player);
    for(var i=0; i<this.friendList.length; i++) {
            if(this.friendList[i].pk === player.pk) {
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
