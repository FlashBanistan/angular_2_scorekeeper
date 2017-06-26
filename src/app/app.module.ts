import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouter } from './app.router';
import { SharedModule } from './shared/shared.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { AuthenticationService } from './shared/services/authentication.service';

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
