import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { FriendService } from '../../friend.service';
import { Friend } from '../../friend';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';



@Component({
  moduleId: module.id,
  selector: 'friend-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FriendService]
})



export class FriendSearchComponent {
  results = [];
  searchTerm$ = new Subject<string>();


  constructor(private friendService: FriendService) {
    this.friendService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results
      });
  }




}
