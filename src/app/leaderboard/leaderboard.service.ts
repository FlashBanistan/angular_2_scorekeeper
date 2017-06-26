import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS
import { Statistics } from './statistics';


@Injectable()
export class LeaderboardService {
    constructor(private http: Http) { }

    private headers = new Headers({'Content-Type': 'application/json'});

    getStatistics() {
      // 'https://django-scorekeeper-api.herokuapp.com/api/books_and_run/statistics/'
        return this.http.get('https://django-scorekeeper-api.herokuapp.com/api/books_and_run/statistics/')
            .map(
              res => res.json() as Statistics[]
            )
    }


}
