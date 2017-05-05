// ANGULAR IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// MODULES
import { AppRouter } from './app.router';
import { SharedModule } from './shared/shared.module';

// 3rd PARTY MODULES
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRouter,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
  ],
  providers: [ AuthenticationService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
