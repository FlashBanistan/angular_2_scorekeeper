import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  template: `
      <div class="row">
        <div class="col-md-12">
          <input
            id="search-box"
            placeholder="Search friends..."
            (keyup)="searchTerm$.next($event.target.value)"
            (focusout)="$event.target.value = ''"
          >
        </div>
      </div>
  `,
  // styles: [
  //   '.row { padding-top: 15px; padding-bottom: 15px }'
  // ],
  providers: [FriendService]
})



export class FriendSearchComponent {
  @Output() sendFriends = new EventEmitter();

  searchTerm$ = new Subject<string>();

  constructor(private friendService: FriendService) {
    this.friendService.search(this.searchTerm$)
      .subscribe(results => {
        this.sendFriends.emit(results);
      });
  }

  clearSearch(event) {
    console.log(event)

  }




}
