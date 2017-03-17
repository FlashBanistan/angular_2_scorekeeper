// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { AuthenticationComponent } from './authentication.component';

// SERVICES
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [ AuthenticationService, ],
})


export class AuthenticationModule { }
