import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS

import { Friend } from './friend';





import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class FriendService {
  constructor(private http: Http) {}

  private headers = new Headers({ 'Content-Type': 'application/json' });
  //private statisticsUrl = 'asdf/asdf';

  getFriendList() {
    var user = JSON.parse(localStorage.getItem('user'));
    return this.http
      // 'https://django-scorekeeper-api.herokuapp.com/api/users/friendlist/'
      .get('http://localhost:8000/api/friendlist/' + user.user_id + '/')
      .map(
      // res => res.json().friends as Friend[],
      res => res.json().friends,
    )
  }









  search(term: string): Observable<Friend[]> {
    var user = JSON.parse(localStorage.getItem('user'));

    return this.http
      .get('http://localhost:8000/api/users/friendlist/' + user.user_id + '/')
        .map((r: Response) => r.json().data as Friend[])
          .catch((error: any) => {
            console.error('An friendly error occurred', error);
            return Observable.throw(error.message || error);
      });
  }









  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
