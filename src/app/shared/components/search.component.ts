import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FriendService } from '../services/friend.service';
import { Friend } from '../classes/friend';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeWhile';


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
  providers: [FriendService]
})


export class FriendSearchComponent implements OnDestroy {

  constructor(private friendService: FriendService) {
    this.friendService.search(this.searchTerm$)
      .takeWhile(() => this.alive)
      .subscribe(results => {
        this.sendFriends.emit(results);
      });

  }

  public alive: boolean = true;
  public searchTerm$ = new Subject<string>();
  @Output() sendFriends = new EventEmitter();

  ngOnDestroy() {
    this.alive = false;
  }


}
