import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Friend } from '../classes/friend';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class FriendService {
  constructor(private http: Http) {}

  user = JSON.parse(localStorage.getItem('user'));

  search(terms: Observable<string>) {
    return terms.debounceTime(250)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
      .get('http://localhost:8000/api/friendlist/' + this.user.user_id + '/get_friend/?username=' + term )
      .map(res => res.json());
  }


}
