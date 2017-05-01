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



export class FriendSearchComponent implements OnInit {
  friends: Observable<Friend[]>;
  private searchTerms = new Subject<string>();

  constructor(private friendService: FriendService) { }
  // constructor(private friendService: FriendService, private router: Router) { }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.friends = this.searchTerms
      .debounceTime(1000)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.friendService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Friend[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of<Friend[]>([]);
      });
  }


}
