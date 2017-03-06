import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //REMOVE THIS

import { FriendList } from './friendlist';

// import { Statistics } from './statistics';



@Injectable()
export class FriendService {

    private headers = new Headers({'Content-Type': 'application/json'});
    //private statisticsUrl = 'asdf/asdf';


    constructor(private http: Http) { }



    getFriendList() {
        return this.http.get('https://django-scorekeeper-api.herokuapp.com/api/users/friendlist/7/')
            .map(
                res => res.json().friends as FriendList[],
            )
    } 


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
     }





}




// getStatistics(): Promise<Statistics[]> {
//         return this.http.get('https://django-scorekeeper-api.herokuapp.com/api/books_and_run/statistics/')
//             .toPromise()
//             .then(response => response.json().data as Statistics[])
//             .catch(this.handleError)
//     }