import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  title = 'Cardly';
  user = {};
  gameExists: boolean = false;

  ngOnInit(): void{
    this.user = JSON.parse(localStorage.getItem('user'));
    if(localStorage.getItem('game')) this.gameExists = true;
  }

  login(event, username, password) {
      event.preventDefault();
      this.authenticationService.getToken(username, password)
        .subscribe(
          response => {
            localStorage.setItem('token', response.json().token);
            var token = localStorage.getItem('token')
            var jwtHelper = new JwtHelper();
            var user = jwtHelper.decodeToken(token);
            localStorage.setItem('user', JSON.stringify(user))
            this.user = JSON.parse(localStorage.getItem('user'));
          }
        )
  }

  logout(): void {
    this.authenticationService.clearToken();
  }

}
