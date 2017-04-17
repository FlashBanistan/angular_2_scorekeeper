// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';

// 3rd PART IMPORTS
import { AuthHttp, AuthConfig } from 'angular2-jwt';

// COMPONENTS
import { AuthenticationComponent } from './authentication.component';

// SERVICES
import { AuthenticationService } from './authentication.service';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    AuthenticationService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
})


export class AuthenticationModule { }
